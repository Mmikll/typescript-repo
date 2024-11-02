(() => {

    class Avenger {
        // private name: string;
        // public team: string;
        // public realName: string;
        static avgAge: number = 35;
        static getAvgAge(){ // static refers to the class
            return this.avgAge; //default method 
        }

        // constructor( name: string, team: string, realName: string = '___no-name___'){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // } forma normal de inicializar constructores

        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string
        ){}

        public bio(){ 
            return `${this.name} in ${this.team} team ` //this in this case refers to the actual object we're a current
        }

        
    }

    const antMan: Avenger = new Avenger('Antman', 'Captain', "scott lang")
    // console.log(Avenger.getAvgAge())

})()    