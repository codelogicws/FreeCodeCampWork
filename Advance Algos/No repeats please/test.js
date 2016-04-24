var map;
function permAlone(str) {
    map = {};
    var array = str.split("");
    return countPerm(array, []);
}

function countPerm(arrStill, arrDone){
    var count = 0;
    for(var i=0;i<arrStill.length;i++){
        if(arrStill[i] != arrDone[-1] ){
            var newStill = arrStill.slice(0);
            var removed = newStill.splice(i, 1);
            var newDone = arrDone.slice(0);
            newDone.push(removed[0]);
            if( !map[newDone] )
                count += countPerm(newStill, newDone);
        }
    }

    if(arrStill.length == 0){
        map[arrDone] = true;
        console.log(arrDone);
    }
    return (arrStill.length == 0)? 1+count : count;
}

function run(){
    var test = permAlone('abcde');
    debugger;
}

