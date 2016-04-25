function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(function(element){
        var radius = Math.round(earthRadius + element.avgAlt);
        delete element['avgAlt'];
        element['orbitalPeriod'] = calcOrbitalPeriod(GM, radius);
        return element;
    });
}

function calcOrbitalPeriod(GM, radius){
    var x1 = Math.pow(radius, 3);
    var x2 = x1/GM;
    var x3 = Math.sqrt(x2);
    return Math.round(x3 * Math.PI *2);
}

function run(){
    var test1 = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
    var test2 = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
    debugger;
}

