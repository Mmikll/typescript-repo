"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('clark', 'joshep', 'kent');
    console.log({ superman });
})();
