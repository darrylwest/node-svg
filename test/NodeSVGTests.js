/**
 * @class NodeSVGTests
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 4/25/15 5:57 PM
 */
var should = require('chai').should(),
    jsdom = require('node-jsdom' ).jsdom,
    NodeSVG = require('../lib/NodeSVG');

describe('MockBrowser', function() {
    'use strict';

    var document = jsdom('mock' ),
        window = document.parentWindow;

    describe('#instance', function() {
        it('should create and instance of node svg', function() {
            var svg = new NodeSVG();

            should.exist( svg );
        });

    });
});