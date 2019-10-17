import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { Header } from "./Header";
import { fetchItem, removeFromCart, removeAllFromCart } from "../actions";

class Cart extends React.Component {
  state = {};

  componentDidMount() {
    if (!this.props.shopping.list) {
      this.props.fetchItem();
    }
  }

  render() {
    return (
      <div>
        {this.props.shopping.cart ? (
          <>
            <Header cart={this.props.shopping.cart.length} />
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  margin: "1%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div>{`Cart: ${this.props.shopping.cart.length} Items`}</div>
                <div>{`Total: $${
                  this.props.shopping.cart.length === 0
                    ? 0
                    : this.props.shopping.cart.reduce(
                        (acc, value) => value.cost + acc,
                        0
                      )
                } Items`}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {this.props.shopping.cart.map((value, i) => (
                  <Card key={i} style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "10px"
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "bold" }}>
                          {`${value.name}`}
                        </div>
                        <div>{`$${value.cost.toFixed(2)}`}</div>
                      </div>
                      <Button
                        variant="contained"
                        onClick={() => this.props.removeFromCart(i)}
                      >
                        {"remove"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </>
        ) : (
          <CircularProgress />
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => this.props.removeAllFromCart()}
          >
            {"Clear Cart"}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shopping: state.shopping
  };
};
export default connect(
  mapStateToProps,
  { fetchItem, removeFromCart, removeAllFromCart }
)(Cart);
