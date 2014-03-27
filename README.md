JSFiddle Api
============

Node library for accessing JSFiddle resources.

## Example and test

```js
// require jsfiddle api
var JSFiddleApi = require ("jsfiddle-api");

// get this fiddle
JSFiddleApi.getFiddle ("iu8B29/1", function (err, fiddleObj) {

    // handle error
    if (err) { return console.log (err); }

    // output the response
    console.log (fiddleObj)
});
```

Run this example using

```sh
$ npm test

> jsfiddle-api@0.0.1 test /home/.../jsfiddle-api
> node test/1.js

{ html: '<div class="hi">Hi</div>',
  js: '$(".hi").fadeOut();',
  css: '.hi {\n    color: red;\n}' }
```

## Methods

### `getFiddle (@options, @callback)`

 - `@options` is a string containing the fiddle id and the version (e.g. `"iu8B29/1"`)
 - `@callback` is a function that will be called after fetching the fiddle information
   - First parameter will be the error (`null` if the call was made successfully)
   - Second parameter will be an object containing three fields:
     - `html`: the HTML code provided in the JSFiddle
     - `js`: the JavaScript code
     - `css`: and the CSS code

## License
See LICENSE file.
