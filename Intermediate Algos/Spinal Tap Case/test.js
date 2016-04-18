function spinalCase(str) {
    str = str.replace(/ |_/g, "-");
    str = str.replace(/[A-Z]/g, function(x){
        return "-" + x.toLowerCase();
    });
    str = str.replace(/--/g, "-");
    str = str.toLowerCase();
    str = (str[0] == '-')? str.substring(1) : str;
    return str;
}

function run(){
    var test1 = spinalCase('This Is Spinal Tap');
    var test4 = spinalCase('ThisIsSpinalTap');
    var test2 = spinalCase("AllThe-small Things");
    var test3 = spinalCase("The_Andy_Griffith_Show");
    debugger;
}

