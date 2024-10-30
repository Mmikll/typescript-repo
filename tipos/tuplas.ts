(
    () =>{
        const hero: [string,  number, boolean] = ["Dr Strange", 100, false];

        hero[0] = 'ironman';
        hero[1] = 150;
        hero[2] = true;
        
        console.log(hero);
    }
)()