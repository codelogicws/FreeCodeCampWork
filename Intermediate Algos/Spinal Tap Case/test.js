function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(/ |_/g, "-");
    str = str.toLowerCase();
    return str;
}

function run(){
    var test1 = spinalCase('This Is Spinal Tap');
    var test4 = spinalCase('ThisIsSpinalTap');
    var test2 = spinalCase("AllThe-small Things");
    var test3 = spinalCase("The_Andy_Griffith_Show");
    debugger;
}

