(()  =>{

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        constructor(public name: string, public realName: string, public age: number){
            this.name = name;
            this.realName = realName;
            this.age = age;
        }

        public mutantPower( id: number ): string {
            return `I'm Thor and I'm a mutant with power ${id}`;
        };

    }

})()