function permAlone(str) {
    var array = str.split("");
    return countPerm(array, []);
}

function countPerm(arrStill, arrDone){
    var count = 0;
    for(var i=0;i<arrStill.length;i++){
        if(arrStill[i] != arrDone[arrDone.length - 1] ){
            var newStill = arrStill.slice(0);
            var removed = newStill.splice(i, 1);
            var newDone = arrDone.slice(0);
            newDone.push(removed[0]);
            count += countPerm(newStill, newDone);
        }
    }
    return (arrStill.length == 0)? 1+count : count;
}

function run(){
    var test = permAlone('aab');
    console.log(test);
}

