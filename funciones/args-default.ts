(
    () =>{

        const fullName = ( firstName: string, lastName?: string, upper: boolean = true): string =>{
            if( upper ){
                return `${firstName} ${lastName || "-----"}`.toUpperCase();
            }else{
                return `${firstName} ${lastName || "-----"}`;
            }
        }

        const name = fullName( 'tony', 'stark' );

        console.log({name})

    }
)();