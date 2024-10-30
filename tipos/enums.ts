(
    () =>{

        enum AudioLabel {
            min,
            medium,
            max,
        };

        let currentAudio: AudioLabel = AudioLabel.max;

        console.log( currentAudio );
        console.log( AudioLabel );
    }
)()