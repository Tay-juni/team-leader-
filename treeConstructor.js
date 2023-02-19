let strArr = ["(1,2)", "(2,4)", "(7,2)"];
let strArr1= ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];

function TreeConstructor(strArr) {
  
  let parents = {};

  
  for (let r = 0; r < strArr.length; r++) {
    
    let pair = strArr[r].slice(1, -1).split(",");
    let child = pair[0];
    let parent = pair[1];

    
    if (child in parents) {
      return false;
    }

    
    parents[child] = parent;
  }


  
  for (let child in parents) {
    let parent = parents[child];
    let count = 0;

    for (let otherChild in parents) {
      if (parents[otherChild] === parent) {
        count++;
      }
    }

    if (count > 2) {
      return false;
    }
  }

  
  return true;
}

console.log(TreeConstructor(strArr));

console.log(TreeConstructor(strArr1));

module.exports = TreeConstructor