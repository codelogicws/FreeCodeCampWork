var Person = function(firstAndLast) {
    this.getFirstName = function(){
        return firstAndLast.split(' ')[0];
    };

    this.getLastName = function(){
        return firstAndLast.split(' ')[1];
    };

    this.getFullName = function(){
        return firstAndLast;
    };

    this.setFirstName = function(firstName){
        var temp = firstAndLast.split(' ');
        temp[0] = firstName;
        firstAndLast = temp.join(' ');
    };

    this.setLastName = function(lastName){
        var temp = firstAndLast.split(' ');
        temp[1] = lastName;
        firstAndLast = temp.join(' ');
    };

    this.setFullName = function(fullName){
        firstAndLast = fullName;
    };
};


function run(){
    var bob = new Person('Bob Ross');
    var test1 = bob.getFullName();
    bob.setFullName('John Smith');
    var test2 = bob.getFullName();
    var test3 = Object.keys(bob).length;
    bob.setFirstName('Steve');
    var test4 = bob.getFullName();
    debugger;
}

