(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){}           
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'World Saved!!'
        }
    }
    class Villian extends Mutante {
        conquer(){
            return 'world conquered!!'
        }
    } // we dont call super because we're are not assigning new properties to the objeect, it calls the super constructor automatically then.
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquer());

    const printName = ( character : Mutante ) => {
        console.log( character.realName );
    }

    // printName(wolverine)
})()