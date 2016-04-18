var replaceTable = {
    '&amp;': /&/g,
    '&lt;': /</g,
    '&gt;': />/g,
    '&quot;': /"/g,
    '&apos;': /'/g,
}
function convertHTML(str) {
    for(var key in replaceTable)
        str = str.replace(replaceTable[key], key);
    return str;
}


function run(){
    var test1 = convertHTML("Dolce & Gabbana");
    var test2 = convertHTML("Hamburgers < Pizza < Tacos");
    debugger;
}

