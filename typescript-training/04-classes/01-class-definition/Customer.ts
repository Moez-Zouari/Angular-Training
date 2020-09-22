class Customer {

    firsName : string ;
    lastName : string;

    constructor(theFirst : string , theLast : string) {
        this.firsName = theFirst ;
        this.lastName = theLast ;
    }

}

// Let's create an instance

let myCustomer = new Customer("Martin" , "Dixon") ;


console.log(myCustomer.firsName);
console.log(myCustomer.lastName);