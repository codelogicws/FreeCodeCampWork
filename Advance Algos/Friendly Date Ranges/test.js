//Notes
//Month names
//number formating
//Years should not repeat if same

const MONTHS = ["", "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];

const ORDINAL = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

function makeFriendlyDates(arr) {
    return arr;
}

function ordinal(num){
    if(Math.floor(num/10) == 1)
        return num+"th";
    return num+ORDINAL[num%10];
}

function run(){
    var test1 = makeFriendlyDates(['2016-07-11', '2016-07-04']);
    var test2 = ordinal(1);
    var test3 = ordinal(63);
    var test4 = ordinal(22);
    var test5 = ordinal(98);
    var test7 = ordinal(12);
    debugger;
}


