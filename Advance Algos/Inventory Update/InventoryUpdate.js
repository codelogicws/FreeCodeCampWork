function updateInventory(arr1, arr2) {
    var map = {};
    map = indexItems(arr1, map);
    var newArray = [].concat(arr1)

    arr2.forEach(function(element, index){
      var existingIndex = map[element[1]];
      if(  typeof(existingIndex) != 'undefined'){
        newArray[existingIndex][0] = (newArray[existingIndex][0] + element[0]);
      }else{
        newArray.push(element);
      }
    });

    sortInv(newArray);
    return newArray;
}

function sortInv(newArray){
    newArray.sort(function(a, b){
      return a[1].toUpperCase() > b[1].toUpperCase();
    });
}

function indexItems(arr, map){
  arr.forEach(function(element, index){
    map[element[1]] = index;
  });
  return map;
}






// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//test (curInv, newInv);
// test ([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
//  [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
test ([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

function test(x, y){
  console.log(updateInventory(x, y))
}
