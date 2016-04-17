var romanList = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
];

//Roman Numerals
//Array.splice()
//Array.indexOf()
//Array.join()


function convertToRoman(num){
    var eachDigit = String(num).split('');
    var multiplier = Math.pow(10, eachDigit.length-1);
    var roman = "";
    while(multiplier > 1){
        debugger;
        currentDigit = eachDigit.shift();
        if(multiplier == 10)
            debugger;
        roman += currentDigit;
        multiplier = multiplier/10;
    }
    roman += romanList[eachDigit.pop()];
    return roman;
}




function run(){
    //for (var i=0;i<16;i++){
    //    test(i);
    //}
    test(216516);
}

function test(num){
    console.log( convertToRoman(num) + '  from  ' + num);
}
