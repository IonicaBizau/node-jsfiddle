# jsfiddle [![Support this project][donate-now]][paypal-donations]

JSFiddle API for NodeJS

## Installation

```sh
$ npm i jsfiddle
```

## Example

```js
// require jsfiddle api
var JSFiddleApi = require ("../index");

// get this fiddle
JSFiddleApi.getFiddle ("u8B29", function (err, fiddleObj) {

    // handle error
    if (err) { return console.log (err); }

    // output the response
    console.log(fiddleObj)
});
```

## Documentation

### `getFiddle(options, callback)`

#### Params
- **String** `options`: A string in this format: `"JSFIDDLE_ID/VERSION"`
- **Function** `callback`: The callback function.

### `saveFiddle({}, callback)`

#### Params
- **** `{}`: options
- **Function** `callback`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md