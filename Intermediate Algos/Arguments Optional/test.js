function addTogether() {
    var args = Array.from(arguments);
    if(typeof(args[0]) !== 'number'){
        return undefined;
    }else if(args.length == 2){
        return (typeof(args[1]) !== 'number')?undefined : args[0] + args[1];
    }else{
        return function(c){
            return (typeof(c) !== 'number')?undefined: args[0] + c;
        };
    }
}


function run(){
    var test = 5;
    alert((typeof(test) === 'number'));
    var test1 = addTogether(2,3);
    var test2 = addTogether(2);
    var test3 = test2(3);
    debugger;
}

