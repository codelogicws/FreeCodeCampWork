var other = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
};

function pairElement(str) {
    var unfolded = [];
    str.split("").forEach(function(element){
        unfolded.push([element, other[element]]);
        debugger;
    });
    return unfolded;
}


function run(){
    var test1 = pairElement("GCG");
    var test2 = pairElement("CTCTA");
    debugger;
}

