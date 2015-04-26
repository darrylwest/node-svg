/**
 * @class MockSVG
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 2015.04.25
 */

var MockSVG = function() {
    'use strict';

    var mock = this,
        methods = [ 
            "_parent", 
            "add", 
            "addTo",
            "after",
            "animate",
            "attr",
            "back",
            "backward",
            "bbox",
            "before",
            "center",
            "children",
            "circle",
            "clear",
            "click",
            "clip",
            "clipWith",
            "clone",
            "cx",
            "cy",
            "data",
            "dblclick",
            "defs",
            "dmove",
            "doc",
            "dx",
            "dy",
            "each",
            "ellipse",
            "fill",
            "first",
            "fixSubPixelOffset",
            "font",
            "forget",
            "forward",
            "front",
            "get", 
            "gradient",
            "group",
            "has",
            "height",
            "hide",
            "image",
            "index",
            "inside",
            "last",
            "line",
            "link",
            "linkTo",
            "mask",
            "maskWith",
            "matrix",
            "memory",
            "mousedown",
            "mouseenter",
            "mouseleave",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "move",
            "nested",
            "next",
            "off",
            "on",
            "opacity",
            "path",
            "pattern",
            "pause",
            "plain",
            "play",
            "polygon",
            "polyline",
            "position",
            "previous", 
            "put",
            "putIn",
            "rbox",
            "rect",
            "remember",
            "remove",
            "removeElement",
            "replace",
            "rotate",
            "scale",
            "set",
            "show",
            "siblings",
            "size",
            "skew",
            "spof",
            "stage",
            "stop",
            "stroke",
            "style",
            "text",
            "toString",
            "touchcancel",
            "touchend",
            "touchleave",
            "touchmove",
            "touchstart",
            "transform",
            "translate",
            "unclip",
            "unmask",
            "use",
            "viewbox",
            "visible",
            "width",
            "x",
            "y"
        ],
        properties = {
            node:{
                id:'',
                type:''
            },
            id:'',
            type:'',
            shapeClass:'',
            x2:'',
            y2:'',
            src:'',
            width:'',
            height:''
        };

    methods.forEach(function(method) {

        mock[ method ] = function() {
            return mock;
        };
    });

    this.rect = function() {

        mock.node = properties.node;

        return mock;
    };

    this.attr = function( params ) {
        properties.x2 = params.x2;
        properties.y2 = params.y2;

        return mock;
    };

    this.plot = function( params ) {
        properties.x2 = params.x2;
        properties.y2 = params.y2;
    };

    this.bbox = function() {

        return properties;
    };

    this.getElement = function() {
        return mock;
    };

    this.image = function( s, w, h ) {

        properties.width = w;
        properties.src = s;
        properties.height = h;

        return mock;
    };


    return this;
};

module.exports = MockSVG;

