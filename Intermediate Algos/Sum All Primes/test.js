function sumPrimes(num) {
    var sum = 0;
    for(var i=2;i<=num;i++)
        if(isPrime(i))
            sum += i;
    return sum;
}

function isPrime(num){
    var x = Math.sqrt(num);
    for(var i=2;i<=x;i++)
        if(num % i === 0)
            return false;
    return true;
}

function run(){
    var test = sumPrimes(10);
    debugger;
}

