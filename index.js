//pairs and triplet sums to target

//pairs sum to given target
// let nums = [2, 7, 10, 1, 11, 15, 9]
// let target = 11

// //hash map
// let obj = {}
// let pairs = []
// for ( let num of nums) {
//     let numToFind = target - num
//     console.log(numToFind)
//     console.log(obj.hasOwnProperty(numToFind))
//     if(obj.hasOwnProperty(numToFind)){
//         pairs.push([num,numToFind])
//     }else {
//         Object.assign(obj , {[num] : true})
//     }
//     console.log(obj)
// }
// console.log(pairs)

//triplet sum to given target
//reference - https://www.geeksforgeeks.org/javascript-program-to-find-a-triplet-that-sum-to-a-given-value/
let nums = [2, 7, 10, 1, 11, 15, 9];
let target = 10;

let triplets = [];
for (let i = 0; i < nums.length; i++) {
  //hash map
  let obj = {};
  let pairs = [];
  let assumedTarget = target - nums[i];
  for (let j = i + 1; j < nums.length; j++) {
    let numToFind = assumedTarget - nums[j];
    console.log(numToFind);
    console.log(obj.hasOwnProperty(numToFind));
    if (obj.hasOwnProperty(numToFind)) {
      // pairs.push([num[j],numToFind])
      triplets.push(nums[i], nums[j], numToFind);
    } else {
      Object.assign(obj, { [nums[j]]: true });
    }
    console.log(obj);
  }
}

// console.log(pairs)
console.log(triplets);
