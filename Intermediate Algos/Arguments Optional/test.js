function addTogether() {
    var args = Array.from(arguments);

    if( notNumber(args[0]) ){
        return undefined;
    }else if(args.length == 2){
        return ( notNumber(args[1]) )?undefined : args[0] + args[1];
    }else{

        return function(c){
            return ( notNumber(c) )?undefined: args[0] + c;
        };
    }
}

function notNumber(x){
    return typeof(x) !== 'number';
}


function run(){
    var test1 = addTogether(2,3);
    var test2 = addTogether(2);
    var test3 = test2(3);
    debugger;
}

