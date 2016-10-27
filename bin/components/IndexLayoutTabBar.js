"use strict";

var React = require('React');

var TabBarItem = function TabBarItem(props) {
  return React.createElement(
    "a",
    { href: props.href, className: "mdl-layout__tab" + (props.isActive ? " is-active" : "") },
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
      props.items.map(function (item) {
        return React.createElement(TabBarItem, { href: "#" + item.id, content: item.content, isActive: item.id == props.activeId });
      })
    )
  );
};

module.exports = IndexLayoutTabBar;