function sym() {
    var args = Array.from(arguments);
    return args.reduce(function(arraySoFar, currentArray){

        var exclusive1 = arraySoFar.filter(function(x, index){
            return currentArray.indexOf(x) === -1 && arraySoFar.indexOf(x) == index;
        });

        var exclusive2 = currentArray.filter(function(x, index){
            return arraySoFar.indexOf(x) === -1 && currentArray.indexOf(x) == index;
        });

        return exclusive2.concat(exclusive1);
    }, []);
}


function run(){
    var answer1 = sym([1, 2, 3], [5, 2, 1, 4]);
    var test1 = answer1.join(" ") === [5, 4, 3].join(" ");

    var answer2 = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
    var test2 = answer2.length == 3;

    debugger;
}

