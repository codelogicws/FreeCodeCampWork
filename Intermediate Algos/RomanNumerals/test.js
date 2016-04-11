function romanize (num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

//separate numbers
//create keys
//iterate through grabing needed keys through all places
//add as many thousands needed

function run(){
    //for (var i=0;i<16;i++){
    //    test(i);
    //}

    test(3584);
}

function test(num){
    console.log( romanize(num) + '  from  ' + num);
}
