(
    () =>{
        type Hero = {
            name: string,
            age?: number,
            powers: string[],
            getName?: () => string
        }

        let customVariable: ( string | number | Hero) = 'Miguel';
        console.log(typeof customVariable );

        customVariable = 20;
        console.log(typeof customVariable );

        customVariable = {
            name: 'Thor',
            age: 1000,
            powers: ['lightning', 'heat vision'],
        }
        console.log(typeof customVariable );

    }
)()