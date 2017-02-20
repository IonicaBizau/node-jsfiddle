// Dependencies
var Request = require("request")
  , HtmlEncoderDecoder = require("html-encoder-decoder")
  , QueryString = require("querystring")
  , Cheerio = require ("cheerio")
  ;

// Constants
const JSFIDDLE_URL = "http://jsfiddle.net/"

// Constructor
var JSFiddleApi = {

    /**
     * getFiddle
     *
     * @name getFiddle
     * @function
     * @param {String} options A string in this format: `"JSFIDDLE_ID/VERSION"`
     * @param {Function} callback The callback function.
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
            Request.get(url + '/embedded', function (err, response, body) {

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

                // parse HTML
                var $ = Cheerio.load(body);

                var panes = $("pre");

                // finally return an object containing `html`, `js` and `css` fields
                callback (null, {
                    html: panes.eq(1).text()
                , js:   panes.eq(0).text()
                , css:  panes.eq(2).text()
                });
            });
        }
    }

    /**
     * saveFiddle
     *
     * @name saveFiddle
     * @function
     * @param {} options
     * @param {Function} callback The callback function.
     */
  , saveFiddle: function (options, callback) {

        // set callback default value
        callback = callback || function () {};

        // validate
        if (typeof callback !== "function") {
            throw new Error ("Callback must be a function.")
        }

        // validate options
        if (!options || options.constructor !== Object) {
            return callback ("First argument must be an object.", null);
        }

        Request.post ({
            headers: {
                "content-type" : "application/x-www-form-urlencoded"
            }
          , url: "http://jsfiddle.net/_save/"
          , body: QueryString.encode ({
                slug: options.slug
              , version: options.version
              , code_html: new Buffer(options.html).toString("base64")
              , code_js:   new Buffer(options.js).toString("base64")
              , code_css:  new Buffer(options.css).toString("base64")
              , DEBUG: true
            })
        }, function(err, response, body){

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
                html: $("#id_code_html").html()
              , js:   $("#id_code_js").html()
              , css:  $("#id_code_css").html()
            });
        });
    }
};

// export JSFiddleApi object
module.exports = JSFiddleApi;
