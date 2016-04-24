//Notes
//Month names
//number formating
//Years should not repeat if same
//example: July 1st, 2016

const MONTHS = ["", "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];

const ORDINAL = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

function makeFriendlyDates(arr) {
    var startDate = arr[0].split("-");
    var endDate = arr[1].split("-");
    var newDates = [];
    newDates[0] = MONTHS[parseInt(startDate[1])] + ' ' + ordinal(startDate[2]) + ', ' + startDate[0];
    newDates[1] = MONTHS[parseInt(endDate[1])] + ' ' + ordinal(endDate[2]) + ', ' + endDate[0];
    return newDates;
}

function ordinal(num){
    if(Math.floor(num/10) == 1)
        return num+"th";
    return num+ORDINAL[num%10];
}

function run(){
    var test1 = makeFriendlyDates(['2016-07-11', '2016-07-04']);
    debugger;
}


