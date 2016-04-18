function uniteUnique(arr1, arr2, arr3) {

    var newArray = [];
    for(var i=0;i<arguments.length;i++){
        newArray = newArray.concat(arguments[i]);
    }

    var returnArray = newArray.reduce(function(arraySoFar, element){
            if( notInArray(arraySoFar, element) )
                arraySoFar.push(element);
            return arraySoFar;
        }, []);

    return returnArray;
}

function notInArray(array, element){
    return array.indexOf(element) == -1;
}


function run(){
    var test1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    debugger;
}

