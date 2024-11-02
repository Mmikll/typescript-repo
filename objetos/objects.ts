(
    () =>{
        let flash:{ name: string, age?: number, powers: string[], getName?: () => string} = {
            name: 'Barry Allen',
            age: 35,
            powers: ['the fastest man alive, time travel'],
        };

        // flash = {
        //     name: 'Clack Kent',
        //     age: 70,
        //     powers: ['superstrong'],
        //     getName(){
        //         return this.name;
        //     }
        // }

        // console.log(flash.getName)

        let superman:{ name: string, age?: number, powers: string[], getName?: () => string} = {
            name: 'Clack Kent',
            age: 70,
            powers: ['superstrong, flying'],
            getName(){
                return this.name;
            }
        };


    }
)()