var romanNumerals = {
    1000 : 'M',
    500 : 'D',
    100 : 'C',
    50 : 'L',
    10 : 'X',
    5 : 'V',
    1 : 'I'
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
