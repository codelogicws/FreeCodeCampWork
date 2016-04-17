//Array.indexOf()
//Array.push()
//Array.join()
//String.substr()
//String.split()
//translatePigLatin("eight")
function translatePigLatin(str) {
    var word = str.split("");
    while(  isNotVowel(word[0])  ){
        var firstLetter = word.shift();
        word.push(firstLetter);
    }

    word = word.join("");
    var ending = "ay"
    if(str === word){
        ending += 'way';
    }
    debugger;
    return word + ending;
}

function isNotVowel(char) {
    return !(/a|e|i|o|u/.test(char));
}

function run(){
    var test1 = translatePigLatin("consonant");
    var test2 = translatePigLatin("eight");
    var test3 = translatePigLatin("algorithm");
    debugger;
}

