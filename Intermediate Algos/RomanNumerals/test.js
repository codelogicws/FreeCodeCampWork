var romanNumerals = [];
addToRomanNumeralLookUp(1000, 'M');
addToRomanNumeralLookUp(500,  'D');
addToRomanNumeralLookUp(100,  'C');
addToRomanNumeralLookUp(50,   'L');
addToRomanNumeralLookUp(10,   'X');
addToRomanNumeralLookUp(5,    'V');
addToRomanNumeralLookUp(1,    'I');

function addToRomanNumeralLookUp(number, letter){
    romanNumerals.push({'number': number, 'letter': letter});
}

function convertToRoman(num) {

    var romanNumber = '';
    var tens = 1000;
    while(tens >= 1){
        var x = Math.floor(num/tens);
        romanNumber += getRoman(x * tens);
        num %= tens;
        tens /= 10;
    }

    return romanNumber;
}

function getRoman(num){
    if(num <= 0) return '';
    var close = romanNumerals.reduce(closestRoman(num));
    if(close < num)
        return close.letter + getRoman(num - close.number);
    return getRoman(close.number - num) + close.letter;
}

function closestRoman(num){
    return function(lastRoman, newRoman){
        if(lastRoman == null)
            return newRoman;
        if(  difference(lastRoman.number, num) < difference(newRoman.number, num)  )
            return lastRoman;
        return newRoman;
    }
}

function difference(num1, num2){
    return Math.abs(num1 - num2);
}

function run(){
    for (var i=0;i<16;i++){
        test(i);
    }
    test(3584);
}

function test(num){
    console.log( convertToRoman(num) + '  from  ' + num);
}
