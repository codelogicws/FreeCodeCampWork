

function whereAreYou(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    collection.forEach(function(queryTerms){
        var keys = Object.keys(source);
        var match = true;
        for(var key in keys){
            var sourceKey = keys[key];
            if( !(queryTerms[sourceKey] === source[sourceKey]) )
                match = false;
        }
        if(match)
            arr.push(queryTerms);
    });
    return arr;
}

function run() {
    console.log( whereAreYou([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
        first: "Tybalt",
        last: "Capulet"
    }, {last: "Capulet"}], {last: "Capulet"}) );

}
