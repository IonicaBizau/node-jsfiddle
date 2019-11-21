
















# jsfiddle

JSFiddle API for NodeJS




## Installation

```sh
$ npm i jsfiddle
```









## Example






```js
const JSFiddle = require ("..");

// get this fiddle
JSFiddle.getFiddle("u8B29", (err, fiddleObj) => {

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



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
