
function makeFriendlyDates(arr) {
    const MONTH = ["", "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"];

    var startDate = arr[0].split("-");
    var endDate = arr[1].split("-");
    var newDates = [];
    newDates[0] = [MONTH[parseInt(startDate[1])], ordinal(startDate[2]), startDate[0]];
    newDates[1] = [MONTH[parseInt(  endDate[1])], ordinal(  endDate[2]),   endDate[0]];

    isWithinAYear  = withinAYear(startDate, endDate);
    isSameYear = startDate[0] == endDate[0];
    isSameMonth = newDates[0][0] == newDates[1][0];
    isSameDate = startDate[0] == endDate[0] && startDate[1] == endDate[1] && startDate[2] == endDate[2];

    if(!isSameDate && isWithinAYear && isSameYear){
        newDates[1].pop();
        if(isSameMonth){
            newDates[0].pop();
            newDates[1].splice(0, 1);
        }
    }else if(!isSameDate && isWithinAYear && !isSameYear){
        if(!isSameMonth)
            newDates[0].pop();
        newDates[1].pop();
    }

    newDates[0] = addYearCommaIfNeeded(newDates[0]);
    newDates[1] = addYearCommaIfNeeded(newDates[1]);

    newDates[0] = newDates[0].join(' ');
    newDates[1] = newDates[1].join(' ');

    if(isSameDate)
        newDates.pop();

    return newDates;
}

function addYearCommaIfNeeded(array){
    if(array.length == 3)
        array[1] = array[1] + ',';
    return array;
}

function withinAYear(start, end){
    var yearGap = end[0] - start[0];
    return ((yearGap + end[1] + end[2]) - (start[1] + start[2]) ) < 10000;
}

function ordinal(num){
    const ORDINAL = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

    if(Math.floor(num/10) == 1)
        return parseInt(num)+"th";
    return parseInt(num)+ORDINAL[num%10];
}

function run(){
    test(["2016-07-01", "2016-07-04"], ["July 1st","4th"]);
    test(["2016-12-01", "2017-02-03"], ["December 1st","February 3rd"]);
    test(["2016-12-01", "2018-02-03"], ["December 1st, 2016","February 3rd, 2018"]);
    test(["2022-09-05", "2023-09-05"], ["September 5th, 2022","September 5th, 2023"]);
    test(["2017-03-01", "2017-05-05"], ["March 1st, 2017","May 5th"]);
    test(["2022-09-05", "2023-09-04"], ["September 5th, 2022","September 4th"]);
    test(["2018-01-13", "2018-01-13"], ["January 13th, 2018"]);
}

function test(input, assert){
    console.log('-------------');
    var result = makeFriendlyDates(input);
    console.log('input: ' + input);
    console.log('assert: ' + assert);
    console.log('result: ' + result);
    console.log('pass  : ' + (assert.join(' -- ') === result.join(' -- ')));
}


