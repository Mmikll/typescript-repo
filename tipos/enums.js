"use strict";
(() => {
    let AudioLabel;
    (function (AudioLabel) {
        AudioLabel[AudioLabel["min"] = 0] = "min";
        AudioLabel[AudioLabel["medium"] = 1] = "medium";
        AudioLabel[AudioLabel["max"] = 2] = "max";
    })(AudioLabel || (AudioLabel = {}));
    ;
    let currentAudio = AudioLabel.max;
    console.log(currentAudio);
    console.log(AudioLabel);
})();
