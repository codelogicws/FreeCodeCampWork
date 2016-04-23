function telephoneCheck(str) {
    // Good luck!
    var regex = new RegExp(/^[1]*[ ]*((\([\d]{3}\))|([\d]{3}))[ -]*[\d]{3}[ -]*[\d]{4}$/);
    return regex.test( str);
}

function run(){
    var test1 = test("5555559548", true);
    var test2 = test("15895", false);
    var test3 = test("1(824) 518-8421", true);
    var test4 = test("1 555-555-5555", true);
    var test5 = test("1 555)555-5555", false);
    debugger;
}

function test(input, booleanShouldBe){
    return telephoneCheck(input) == booleanShouldBe;
}
