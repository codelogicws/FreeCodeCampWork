//Array.indexOf()
//Array.push()
//Array.join()
//String.substr()
//String.split()
//translatePigLatin("eight")
function translatePigLatin(str) {
    var word = str.split("");
    while( isNotVowel(word[0]) )
        word.push(word.shift());

    word = word.join("");
    var ending = (str === word)? "way" : "ay";
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

