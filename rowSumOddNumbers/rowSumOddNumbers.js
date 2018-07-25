// Given the triangle of consecutive odd numbers:

//             1
//          3     5
//       7     9    11
//   13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
    var saveTotal=0;
      for (var i=0;i<n;i++){  
          saveTotal= saveTotal + i
      }
      var Double= 2 * saveTotal
      var sum=0;
      for (j=0;j<n;j++){
          sum = sum + Double
          Double = Double + 2
      }
      return sum + n
    }
    // second solution
    // function rowSumOddNumbers(n) {
        // return n*n*n
// }