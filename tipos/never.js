"use strict";
(() => {
    const error = (message) => {
        if (true) {
            throw new Error(message);
        }
        return 1;
    };
    error('help!!');
    console.log('hello');
})();
