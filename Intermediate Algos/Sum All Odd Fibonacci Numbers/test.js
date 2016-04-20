function sumFibs(num) {
    var lastMinus = 1;
    var last = 1;
    var temp = 0;
    var sum = 0;

    while(num >= lastMinus){
        if(lastMinus % 2 == 1)
            sum += lastMinus;
        temp = lastMinus + last;
        lastMinus = last;
        last = temp;
    }

    return sum;
}




function run(){
    var test1 = sumFibs(4);
    debugger;
}

