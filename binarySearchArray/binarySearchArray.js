
/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array1, target) {

    // index = 0,1,2,3,4,5,6,7,8,9
  //example:- [1,2,3,4,5,6,7,8,9,10] 
     var start = 0;
     var last = array.length -1; // the index of last its gonna be 9, but i'm gonna change it!
     var middle;
     for(var i=0; i<array.length; i++){

       middle = Math.floor((start + last)/2); // its gonna be index 4
         if(target === array[middle]){
             return middle; // pingo i find it!
         }else if(target > array[middle]){
             start = middle + 1; //start its gonna start on index 5 inster of 0!
         }else if(target < array[middle]){
             last = middle - 1; // insted of index 9 its gonna be index 4
         }
     }
     return -1;
};


// second solution
// var binarySearch = function (array, target) {
//  var l = 0;
//  var r = array.length-1;
//  var m = Math.floor((l+r)/2);
//  while(array[m] != target && l < r){
//       if(target < array[m]){
//           r = m - 1;
//       }
//       if(target > array[m]){
//           l = m + 1;
//       }
//       m = Math.floor((l+r)/2)
//     }
//     if(array[m] !== target){
//         return -1
//     }else {
//         return m;
//     }
// };Ï