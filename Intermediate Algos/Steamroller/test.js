function steamrollArray(arr) {
    var newArray = arr.reduce(function(arrSoFar, element){
        var current = (Array.isArray(element))?steamrollArray(element):element;
        return arrSoFar.concat(current);
    }, []);
    return newArray;
}

function run(){
    var test = steamrollArray([1, [2], [3, [[4]]]]);
    debugger;
}

