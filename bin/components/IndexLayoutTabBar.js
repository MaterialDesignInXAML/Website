"use strict";

var React = require('React');

var TabBarItem = function TabBarItem(props) {
  return React.createElement(
    "a",
    { href: props.href, className: "mdl-layout__tab" },
    props.content
  );
};

var IndexLayoutTabBar = function IndexLayoutTabBar(props) {
  return React.createElement(
    "div",
    { className: "mdl-layout__tab-bar mdl-js-ripple-effect" },
    React.createElement(
      "div",
      { className: "mdl-tabs__tab-bar" },
      React.createElement(TabBarItem, { href: "home", content: "Home" }),
      React.createElement(TabBarItem, { href: "doobry", content: "doobry" })
    )
  );
};

module.exports = IndexLayoutTabBar;