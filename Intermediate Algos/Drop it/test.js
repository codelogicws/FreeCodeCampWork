function dropElements(arr, func) {
    var keep = false;
    var retArray = arr.filter(function(x){
        debugger;
        if(!func(x)){
            keep = true;
        }
        return keep;
    });
    return retArray;
}

function run(){
    var test2 = dropElements([1, 2, 3, 4], function(n) {return n < 3; });
    debugger;
}

