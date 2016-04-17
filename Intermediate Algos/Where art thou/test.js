

function whereAreYou(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    //hasOwnProperty

    collection.forEach(function(queryTerms){
        var keys = Object.keys(queryTerms);
        for(var key in keys){
            var sourceKeys = Object.keys(source);
            var collProperty = keys[key];
            if( sourceKeys.indexOf(collProperty) > -1 && queryTerms[collProperty] === source[collProperty] ){
                arr.push(queryTerms);

            }
        }
    });


    return arr;

}

function run() {
    console.log( whereAreYou([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
        first: "Tybalt",
        last: "Capulet"
    }, {last: "Capulet"}], {last: "Capulet"}) );

}
