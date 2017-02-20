const JSFiddle = require ("..");

// get this fiddle
JSFiddle.getFiddle("u8B29", (err, fiddleObj) => {

    // handle error
    if (err) { return console.log (err); }

    // output the response
    console.log(fiddleObj)
});
