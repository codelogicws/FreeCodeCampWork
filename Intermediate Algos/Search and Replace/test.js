function myReplace(str, before, after) {
    after = capMatch(before, after)
    str = str.replace(before, after);
    return str;
}

function capMatch(capsFrom, capsTo){
    if(/^[A-Z]/.test(capsFrom))
        return capsTo[0].toUpperCase() + capsTo.substring(1);
    return capsTo;

}



function run(){
    var test1 = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
    debugger;
}

