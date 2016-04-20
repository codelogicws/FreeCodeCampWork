function smallestCommons(arr) {
    if(arr[0]<arr[1])
        arr = arr.reverse();

    var multiple = arr[0];
    while(notMultiple(multiple, arr)){
        multiple = multiple+arr[0];
    }
    return multiple;
}

function notMultiple(multiple, rangeArray){
    for(var i=rangeArray[1];i<=rangeArray[0];i++){
        if(multiple%i != 0)
            return true;
    }
    return false;
}


function run(){
    debugger;
    var test1 = smallestCommons([1,5]);
    debugger;
}

