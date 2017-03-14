'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var RestException = require('../../../../../lib/base/RestException');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('AvailableAddOn', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/marketplace/AvailableAddOns/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'VoiceBase High Accuracy Transcription',
          'description': 'Automatic Transcription and Keyword Extract...',
          'pricing_type': 'per minute',
          'configuration_schema': {
              'type': 'object',
              'properties': {
                  'bad_words': {
                      'type': 'boolean'
                  }
              },
              'required': [
                  'bad_words'
              ]
          },
          'url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'extensions': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.marketplace.availableAddOns.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/marketplace/AvailableAddOns';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'available_add_ons': [
              {
                  'sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'VoiceBase High Accuracy Transcription',
                  'description': 'Automatic Transcription and Keyword Extract...',
                  'pricing_type': 'per minute',
                  'configuration_schema': {
                      'type': 'object',
                      'properties': {
                          'bad_words': {
                              'type': 'boolean'
                          }
                      },
                      'required': [
                          'bad_words'
                      ]
                  },
                  'url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'extensions': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://preview.twilio.com/marketplace/AvailableAddOns?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/marketplace/AvailableAddOns?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'available_add_ons'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.marketplace.availableAddOns.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'available_add_ons': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://preview.twilio.com/marketplace/AvailableAddOns?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/marketplace/AvailableAddOns?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'available_add_ons'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.marketplace.availableAddOns.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
