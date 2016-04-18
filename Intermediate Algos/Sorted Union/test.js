//Arguments object
//Array.reduce()
function uniteUnique(arr1, arr2, arr3) {

    var argsAsArray = Array.prototype.slice.call(arguments);

    var returnArray = argsAsArray.reduce(function(arraySoFar, inputArray){
        inputArray.reduce(function(arraySoFar, element){

            if(arraySoFar.indexOf(element) == -1)
                arraySoFar.push(element);
            return arraySoFar;

        }, arraySoFar);
        return arraySoFar;
    }, []);

    return returnArray;
}


function run(){
    var test1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    debugger;
}

