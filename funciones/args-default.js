"use strict";
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName} ${lastName || "-----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "-----"}`;
        }
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();
