var pairs = [['A', 'T'], ['C', 'G']];

function pairElement(str) {
    //first figure out what array matchs
    //figure out what number in the array it is
    //add both items from array
    var unfolded = [];
    str.split("").forEach(function(element){
        var arrayNum = (pairs[0].indexOf(element) > -1)? 0 : 1;
        var letter = pairs[arrayNum].indexOf(element);
        unfolded.push([pairs[arrayNum][letter], pairs[arrayNum][+!letter]]);
        debugger;
    });
    return unfolded;
}


function run(){
    var test1 = pairElement("GCG");
    var test2 = pairElement("CTCTA");
    debugger;
}

