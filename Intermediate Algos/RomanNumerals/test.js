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
    return num;
}

function run(){
    test(3);
}

function test(num){
    console.log( convertToRoman(num) + '  from  ' + num);
}
