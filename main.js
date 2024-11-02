"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} in ${this.team} team `;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Antman', 'Captain', "scott lang");
})();
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'World Saved!!';
        }
    }
    class Villian extends Mutante {
        conquer() {
            return 'world conquered!!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('The End');
            }
            return Apocalipsis.instance;
        }
        set changeName(name) {
            this.name = name;
        }
    }
    const Apocalipsis1 = Apocalipsis.callApocalipsis();
    const Apocalipsis2 = Apocalipsis.callApocalipsis();
    const Apocalipsis3 = Apocalipsis.callApocalipsis();
    Apocalipsis1.changeName = 'My End';
    console.log(Apocalipsis1, Apocalipsis2, Apocalipsis3);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(isMutant, name, realName) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.isMutant ? "Mutante " : ""}${super.getFullName()}`;
        }
        set fullName(name) {
            if (name.length <= 3) {
                throw new Error('El nombre debe tener mas de 3 caracteres');
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen(true, 'wolverine', 'logan');
    wolverine.fullName = 'Miguel';
})();
//# sourceMappingURL=main.js.map