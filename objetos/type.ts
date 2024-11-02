(
    () =>{

        type Hero = {
            name: string,
            age?: number,
            powers: string[],
            getName?: () => string
        }

        let flash: Hero = {
            name: 'Barry Allen',
            age: 35,
            powers: ['the fastest man alive, time travel'],
        };

        let superman: Hero = {
            name: 'Clack Kent',
            age: 70,
            powers: ['superstrong, flying'],
            getName(){
                return this.name;
            }
        };


    }
)()