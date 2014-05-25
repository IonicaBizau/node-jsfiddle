// require jsfiddle api
var JSFiddleApi = require ("../index");

// get this fiddle
JSFiddleApi.saveFiddle ({
    slug: "cJvLD"
  , version: 5
  , html: "<h1>Hello World</h2>"
  , js: "alert(1)"
  , css: "h1 { color: red; }"
}, function (err, fiddleObj) {

    // handle error
    if (err) { return console.log (err); }

    // output the response
    console.log(fiddleObj)
});
