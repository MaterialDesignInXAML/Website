"use strict";

var render = function render(tabData) {
    var s = "";
    for (var m = 0; m < tabData.metas.length; m++) {
        s += "<meta";
        for (var a = 0; a < tabData.metas[m].attribs.length; a++) {
            var attribute = tabData.metas[m].attribs[a];
            s += " " + attribute.name + "='" + attribute.value + "'";
        }

        s += " data-dyn-meta>";
    }
    return s;
};

module.exports = render;