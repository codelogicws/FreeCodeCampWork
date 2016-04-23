var worth = {
    "ONE HUNDRED" : 100,
    "TWENTY" : 20,
    "TEN" : 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
};

function checkCashRegister(price, cash, cid) {
    var cid = cid.reverse();
    var change = cash - price;
    var isMoneyInReg = false;
    var unitsOfChange = cid.reduce(function(returned, currency){
        var unitMaxChange = parseInt(change / worth[currency[0]]) * worth[currency[0]];
        var subtract = Math.min(currency[1], unitMaxChange);
        if(subtract < currency[1])
            isMoneyInReg = true;
        change = Math.round((change - subtract) * 100)/100;
        if(subtract > 0)
            returned.push([currency[0], subtract]);
        return returned;
    }, []);
    if(change > 0){
        return "Insufficient Funds";
    }else if(!isMoneyInReg){
        return "Closed";
    }
    return unitsOfChange;
}


//Iterate through given cid
  //Look up amount to see if we can subtract it from needed change
    //push amount to array
    //subtract amount from the change


//Iterate through all money amounts
  //check if we have in drawer

function run(){
    //var answer1 = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
    //var test1 = answer1;
    //
    //var answer2 = checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    //var test2 = answer2;

    var answer3 = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
    var test3 = answer3;

    debugger;
}

