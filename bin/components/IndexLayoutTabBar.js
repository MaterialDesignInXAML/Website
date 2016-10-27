'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBarItem = function TabBarItem(props) {
  return _react2.default.createElement(
    'a',
    { href: props.href, 'data-tab-id': props.id, className: "mdl-layout__tab" + (props.isActive ? " is-active" : "") },
    props.content
  );
};

var IndexLayoutTabBar = function IndexLayoutTabBar(props) {
  return _react2.default.createElement(
    'div',
    { className: "mdl-layout__tab-bar mdl-js-ripple-effect" },
    _react2.default.createElement(
      'div',
      { className: "mdl-tabs__tab-bar" },
      props.items.map(function (item) {
        return _react2.default.createElement(TabBarItem, { key: item.id, id: item.id, href: "#" + item.id, content: item.content, isActive: item.id == props.activeId });
      })
    )
  );
};

module.exports = IndexLayoutTabBar;