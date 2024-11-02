(
    () =>{

        type Avengers = {
            nickFury: string;
            ironman: string;
            vision: string;
            active: boolean;
            power: number;
        }

        const avengers: Avengers = {
            nickFury: 'Samuel L Jackson',
            ironman: 'Robert Downey Jr',
            vision: 'Paul Bettany',
            active: true,
            power: 1500.12121,
        }

        // const {power, vision} = avengers;
        // console.log(power.toFixed(2), vision.toUpperCase());

        const printAvenger = ({ironman, ...restAvenger}: Avengers) =>{
            console.log( ironman, restAvenger );
        };
        // printAvenger(avengers)

        const avengerArr: [string, boolean, number] = [ 'captain america', true, 5426];

        const [cap, ironman, diff ] = avengerArr;
        // console.log({ ironman, cap })

        

    }
)()