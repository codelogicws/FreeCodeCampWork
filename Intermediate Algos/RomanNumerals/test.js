var romanList = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "X"];
        i = 3;
function convertToRoman(num){
    var eachDigit = String(num).split('');
    var multiplier = Math.pow(10, eachDigit.length-1);
    var roman = "";
    while(multiplier > 1){
        roman += eachDigit.shift();
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
    console.log( romanize(num) + '  from  ' + num);
}
