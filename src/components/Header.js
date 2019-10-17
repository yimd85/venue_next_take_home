import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

export const Header = props => {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Link style={{ textDecoration: 'none',color: "white" }} to="/">
              Shop
            </Link>
            <Link style={{ textDecoration: 'none',color: "white" }} to="/cart">
              {`Cart (${props.cart})`}
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

