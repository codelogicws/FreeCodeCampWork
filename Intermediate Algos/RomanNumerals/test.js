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

    var tens = 1000;
    while(tens >= 1){
        var x = Math.floor(num/tens);
        console.log(x);
        num %= tens;
        tens /= 10;
    }

    return 5;
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




function run(){
    test(3584);
}

function test(num){
    console.log( convertToRoman(num) + '  from  ' + num);
}
