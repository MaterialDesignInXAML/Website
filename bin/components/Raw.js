'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Raw = function Raw(props) {
    return _react2.default.createElement('div', { id: props.id, dangerouslySetInnerHTML: { __html: props.content } });
};

module.exports = Raw;