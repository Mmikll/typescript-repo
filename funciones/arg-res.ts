(
    () =>{
        const fullName =  ( firstName: string, ...rest: string[]): string =>{
            return `${firstName} ${ rest.join(' ')}`;
        };

        const superman = fullName('clark', 'joshep', 'kent');
        console.log({superman});


    }
)()