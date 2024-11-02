(() =>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log("constructor Avenger llamado!")
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            public isMutant: boolean,
            name : string, //we dont need to set it as public bcz it creates a new instance, we dont want that in this case
            realName : string,
        ){
            super( name, realName);
            // console.log("constructor Xmen llamado!")
        }

        getFullNameFromXmen(){
            console.log( super.getFullName())
        }

        get fullName(){
            return `${this.isMutant? "Mutante " : ""}${super.getFullName()}`;
        }

        set fullName(name: string){
            if(name.length <= 3){
                throw new Error('El nombre debe tener mas de 3 caracteres');
            }
            this.name = name;
        }
    }

    const wolverine = new Xmen(true, 'wolverine', 'logan');

    wolverine.fullName = 'Miguel';

    // console.log({wolverine});

})()
/*
    Clearifing concepts:
    Private and Protected => The difference is just the scope, in Private you just can acces to it into the class and protected can acces the classes that are extended from the class
*/