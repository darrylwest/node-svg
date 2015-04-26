/**
 * @class NodeSVG
 *
 * @author darryl.west@raincitysoftware.com
 * @created 4/25/15
 */

var NodeSVG = function(options) {
    'use strict';

    var svg = this,
        log = options.log,
        document = options.document,
        window = document.parentWindow;

    this.createSVGSurface = function(container, width, height) {
        var surface;

        if (!width) {
            width = '100%';
        }

        if (!height) {
            height = '100%';
        }

        // var SVG = require('svg.js');
        // surface = new SVG( container, width, height );

        return surface;
    };

};

module.exports = NodeSVG;

