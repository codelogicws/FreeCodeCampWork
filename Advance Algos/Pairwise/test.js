function pairwise(arr, arg) {
    var map = [];
    return arr.reduce(function(ret, element, index){
        if(!map[index]){
            for(var i=index+1;i<arr.length;i++){
                if(!map[i] && element + arr[i] === arg){
                    map[i] = true;
                    ret += index + i;
                    break;
                }
            }
        }
        map[index] = true;
        return ret;
    }, 0);
}

function run(){
    var test1 = pairwise([1,4,2,3,0,5], 7);
    var test2 = pairwise([1, 3, 2, 4], 4);
    var test3 = pairwise([1, 1, 1], 2);
    debugger;
}

