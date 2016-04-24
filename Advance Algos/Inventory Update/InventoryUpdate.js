//----Plan
//Create a index
//iterate through the new array
  //if already exist then add to the old
  //else make a new item

var map = {};

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    indexItems(arr1);
    var newArray = [].concat(arr1)
    arr2.forEach(function(element, index){
      var existingIndex = map[element[1]];
      if(  typeof(existingIndex) != 'undefined'){
        newArray[existingIndex] = [(newArray[existingIndex][0]+element[0]), element[1]];
      }else{
        newArray.push(element);
      }
    });
    newArray = newArray.sort(function(a, b){
      return a[1].toUpperCase() > b[1].toUpperCase();
    });
    return newArray;
}

function indexItems(arr){
  arr.forEach(function(element, index){
    map[element[1]] = index;
  });
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
