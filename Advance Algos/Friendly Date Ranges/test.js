
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
    isMonthMatch = newDates[0][0] == newDates[1][0];

    if(isWithinAYear){
        debugger;
        newDates[0].pop();
        newDates[1].pop();
        if(isMonthMatch){
            newDates[1].splice(0, 1);
        }
    }

    if(newDates[0].length == 3){
        newDates[0][1] += ',';
        newDates[1][1] += ',';
    }

    newDates[0] = newDates[0].join(' ');
    newDates[1] = newDates[1].join(' ');

    return newDates;
}

function withinAYear(start, end){
    var yearGap = end[0] - start[0];
    return ((yearGap + end[1]) - start[1]) < 100;
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
}

function test(input, assert){
    console.log('-------------');
    var result = makeFriendlyDates(input);
    console.log('input: ' + input);
    console.log('assert: ' + assert);
    console.log('result: ' + result);
    console.log('pass  : ' + (assert.join(' -- ') === result.join(' -- ')));
}


