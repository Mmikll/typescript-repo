(
    () =>{
        const hero:string = 'flash';

        function returnName():string{
            return hero;
        }

        const activeBatisignal = ():string =>{
            return 'Batisignal Active';
        }

        console.log(typeof activeBatisignal )

        const heroName:string = returnName();
    }
)()