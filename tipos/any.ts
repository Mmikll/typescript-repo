(
    () => {
        let avenger: any = 123; 
        let exist;
        let power;
        
        avenger = "Dr Sthepen Strange"
        //console.log( avenger.charAt(0));
        console.log( (avenger as string ).charAt(0));

        avenger = 123.43
        console.log(<number>avenger.toFixed(2));

        console.log(exist)
        console.log(power)
    }
)();
//casteo cambertir un tipo de dato a otro