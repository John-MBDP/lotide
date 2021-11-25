
const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`;
  } 
 // if actual does not === to expected return a message
  return `✔✔✔Assertion Passed: ${actual} === ${expected}`;
};


const eqArrays = (test1, test2) => {

  // check if the array lengths are different
  if (test1.length !== test2.length) return false;

for (let i = 0; i < test1.length; i++) {
  //if test[i] does not equal return false
  if ((test1[i] !== test2[i])) {
    return false;
  }
}
return true;
};



// const eqObjects = function(object1, object2) {

//   //returns a string 
//   let valueOfObject1 = Object.keys(object1);

//   // if one of the objects length is higher than the other one return false
//   if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  
//   // console.log("This is Object2: ", valueOfObject2);
//   for(const sameValue of valueOfObject1) {
//     if(Array.isArray(object1[sameValue]) && Array.isArray(object2[sameValue])) {
//       //reverts the value
//        if(!eqArrays(object1[sameValue], object2[sameValue])) {
//        return false;
//     } else if (object1[sameValue] !== object2[sameValue]) {
//       return false;
//     }
//   }
// }
// return true;
// }


const eqObjects = function(object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {

    for (const keyName of object1KeyArray) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        if(!eqArrays(object1[keyName], object2[keyName])) {
          return false;
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {
          return false;
        }
      }
    }
    return true;
  }
};



console.log(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }));
console.log(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
console.log(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }));