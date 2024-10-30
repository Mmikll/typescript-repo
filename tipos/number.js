"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    (avengers < villians) ? console.log('we\'re in troubles') : console.log('we\'re safe');
    avengers = Number('22c');
    console.log(avengers);
})();
// NaN is considered as a number
