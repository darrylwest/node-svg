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

    var document = jsdom( '<!DOCTYPE html><html><body></body></html>' ),
        createOptions;

    createOptions = function() {
        var opts = {
            document: document
        };

        return opts;
    };

    describe('#instance', function() {
        var svg = new NodeSVG( createOptions() );

        it('should create and instance of node svg', function() {

            should.exist( svg );
        });

        it('should create a surface object', function() {
            var container = document.createElement('div' ),
                surface;

            surface = svg.createSVGSurface( container, 250, 250 );

            should.exist( surface );
        });

    });
});