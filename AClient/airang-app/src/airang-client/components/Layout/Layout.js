import React from "react";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {

    return (React.createElement(Fragment, null,
        React.createElement(MainNavigation, null),
        React.createElement("main", null, props.children)));
};

export default Layout;