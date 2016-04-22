function truthCheck(collection, pre) {
    return collection.reduce(function(match, x){
        return (match && !!(x[pre]))?true : false;
    }, true);
}


function run(){
    console.log("test");
    var test1 = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
    var test3 = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
    var test2 = test1;
    var test4 = test3;
    debugger;
}

