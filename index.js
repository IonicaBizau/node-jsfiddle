// dependencies
var Request = require("request")
  , HtmlDecoderEncoder = require("html-decoder-encoder")
  , Cheerio = require ("cheerio")
  ;

// constants
const JSFDIDLE_URL = "http://jsfiddle.net/"

// constructor
var JSFiddleApi = {
    /**
     * JSFiddleApi#getFiddle
     *
     *  Arguments
     *    @options: string in this format: "JSFIDDLE_ID/VERSION"
     *
     */
    getFiddle: function (options, callback) {

        // set callback default value
        callback = callback || function () {};

        // validate
        if (typeof callback !== "function") {
            throw new Error ("Callback must be a function.")
        }

        // validate options
        if (!options && options.constructor !== Object && options.constructor !== String) {
            return callback ("First argument must be a string or an object.", null);
        }

        // options is object
        if (options.constructor === Object) {
            return callback ("Not yet implemented", null);
        }

        // options is a string
        if (options.constructor === String) {

            // build the url
            var url = JSFIDDLE_ID + options;

            // run the request
            Request.get(url, function (err, response, body) {

                // handle error
                if (err) {
                    return callback (err, null);
                }

                // not a 200 status code
                if (response.statusCode !== 200) {
                    return callback ({
                        statusCode: response.statusCode
                      , message: "The page responsed with a status code different than 200: " + response.statusCode
                    }, null);
                }

                // override body response decoding it
                body = HtmlDecoderEncoder.decode (body);


            });
        }
    }
};
