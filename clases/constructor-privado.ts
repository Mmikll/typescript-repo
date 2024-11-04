(() => {

    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor( public name: string){}

        static callApocalipsis(): Apocalipsis{
            if ( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('The End');
            }
            return Apocalipsis.instance;
        }
        set changeName(name: string){
            this.name = name;
        }
    }
    const Apocalipsis1 = Apocalipsis.callApocalipsis();
    const Apocalipsis2 = Apocalipsis.callApocalipsis();
    const Apocalipsis3 = Apocalipsis.callApocalipsis();

    Apocalipsis1.changeName = 'My End'
    // const apocalipsis = new Apocalipsis('The End');
    // const apocalipsis2 = new Apocalipsis('The End2');
    // const apocalipsis3 = new Apocalipsis('The End3');

    // console.log(Apocalipsis1, Apocalipsis2, Apocalipsis3)

})()