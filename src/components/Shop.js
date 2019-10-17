import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { Header } from "./Header";
import { fetchItem, addToCart } from "../actions";

class Shop extends React.Component {
  state = {};

  componentDidMount() {
    if (!this.props.shopping.list) {
      this.props.fetchItem();
    }
  }

  render() {
    return (
      <div>
        {this.props.shopping.list ? (
          <>
            <Header cart={this.props.shopping.cart.length} />
            <div style={{ padding: "10px" }}>
              <div style={{ margin: "1%", width: "30%" }}>Shop Items</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row"
                }}
              >
                {this.props.shopping.list.map((value, i) => (
                  <Card key={i} style={{ margin: "1%", width: "23%" }}>
                    <div style={{ padding: "5%" }}>
                      <div style={{ marginBottom: "5%", fontWeight: "bold" }}>
                        {`${value.gsx$name.$t}`}
                      </div>
                      <div style={{ marginBottom: "5%" }}>
                        {`$${(value.gsx$priceincents.$t / 100).toFixed(2)}`}
                      </div>
                      <Button
                        variant="contained"
                        style={{ width: "100%" }}
                        disabled={
                          `${value.gsx$available.$t}` !== "TRUE"
                            ? true
                            : undefined
                        }
                        onClick={() =>
                          this.props.addToCart({
                            name: `${value.gsx$name.$t}`,
                            cost: Number(
                              (`${value.gsx$priceincents.$t}` / 100).toFixed(2)
                            )
                          })
                        }
                      >
                        {`${value.gsx$available.$t}` === "TRUE"
                          ? "Add To Cart"
                          : "Not Available"}
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
  { fetchItem, addToCart }
)(Shop);
