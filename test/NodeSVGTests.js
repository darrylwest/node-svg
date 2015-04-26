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

    var createOptions = function() {
        var opts = {},
            document = jsdom( '<!DOCTYPE html><html><body></body></html>' );

        opts.document = document;
        opts.window = document.parentWindow;

        return opts;
    };

    describe('#instance', function() {
        it('should create and instance of node svg', function() {
            var svg = new NodeSVG( createOptions() );

            should.exist( svg );
        });

    });
});