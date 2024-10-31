(
    () =>{
        const addNumbers = ( a: number, b: number ) => a + b;
        const greet = ( name: string ) => `Hola ${name}`;
        const saveTheWorld = () => `World is saved!`

        let myFunction;
        //Number
        // myFunction: (x: number, y: number) => number;
        // myFunction = addNumbers(2,1);
        // console.log(myFunction);

        //String
        // myFunction: (x: string) => string;
        // myFunction = addNumbers('hello world');
        // console.log(myFunction);

        //no arguments
        // myFunction: () => string;
        // myFunction = addNumbers(2,1);
        // console.log(myFunction);
    }
)()