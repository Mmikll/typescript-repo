(()  =>{

    interface Client {
        name: string;
        age?: number;
        address?: Address;
        getFullAddress( id: string ) : string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string,
    }
    
    const client2: Client = {
        name: 'Jane Doe',
        age: 30,
        getFullAddress( id ){
            return this.name;
        }
    }

    const client: Client = {
        name: 'John Doe',
        age: 30,
        address: {
            id: 123,
            zip: ' KRY ASD',
            city: 'Otawa',
        },
        getFullAddress( id ){
            return this.name;
        }
    }

})()