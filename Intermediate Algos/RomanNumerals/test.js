var romanList = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
];

//Roman Numerals
//Array.splice()
//Array.indexOf()
//Array.join()


function convertToRoman(num){
    var eachDigit = String(num).split('');
    var roman = '';
    var maxDigitsUnder1000 = (eachDigit.length > 3)? 3 : eachDigit.length;
    for(var i=0;i<maxDigitsUnder1000;i++){
        roman = romanList[i][eachDigit.pop()] + roman;
        debugger;
    }
    roman = 'M'.repeat(+eachDigit.join("")) + roman;
    return roman;
}




function run(){
    //for (var i=0;i<16;i++){
    //    test(i);
    //}
    test(12);
}

function test(num){
    console.log( convertToRoman(num) + '  from  ' + num);
}
