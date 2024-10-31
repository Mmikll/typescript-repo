"use strict";
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activeBatisignal = () => {
        return 'Batisignal Active';
    };
    console.log(typeof activeBatisignal);
    const heroName = returnName();
})();
