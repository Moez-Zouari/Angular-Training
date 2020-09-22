var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firsName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firsName);
console.log(myCustomer.lastName);
