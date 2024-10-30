(
    () =>{
        const batman: string = 'Batman';
        const linternaVerde: string = "Linterna verde";
        const volcanNegro: string = `Heroe: Volcan Negro`;

        console.log(`I'm ${batman}`);
        console.log(batman.toUpperCase());

        console.log( batman[10]?.toLocaleLowerCase() || "Batman is not here"); 
    }
)();