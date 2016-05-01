var Person = (function () {
    function Person() {
        console.log("you created a persom");
        console.log("yet again");
    }
    Person.prototype.sayHello = function () {
        console.log("Hi there");
    };
    return Person;
}());
