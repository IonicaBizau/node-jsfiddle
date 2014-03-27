/**
 *
 *  JSFiddleApi
 *  Node library for accessing JSFiddle resources.
 *  See README file for more information
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Ionică Bizău
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */
// dependencies
var Request = require("request")
  , HtmlEncoderDecoder = require("html-encoder-decoder")
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
            var url = JSFIDDLE_URL + options;

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
                body = HtmlEncoderDecoder.decode (body);

                // parse HTML
                var $ = Cheerio.load(body);

                // finally return an object containing `html`, `js` and `css` fields
                callback (null, {
                    html: $("#id_code_html").val()
                  , js:   $("#id_code_js").val()
                  , css:  $("#id_code_css").val()
                });
            });
        }
    }
};

// export JSFiddleApi object
module.exports = JSFiddleApi;
