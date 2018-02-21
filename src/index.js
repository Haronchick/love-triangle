/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  //   Your task is to implement function getLoveTrianglesCount which calculates
  // how many love triangles phenomenons take place. The function takes the array of
  // integers as the only parameter. An integer k on nth place means, that nth Spichonee loves kth Spichonee.
  //    For example:
  //
  //       // 1  2  3  Spichonees
  //       let count = getLoveTrianglesCount([2, 3, 1]);
  //   console.log(count); // 1
  //   /**
  //    1st Spichonee loves 2nd Spichonee.
  //    2nd Spichonee loves 3rd Spichonee.
  //    3rd Spichonee love 1st Spichonee.
  //    There is love triangle.
  //    */
  //   Write your code in `src/index.js. Be sure, that all tests are positive.
  //   That means you cannot catch any error in tests.


    // [6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12]
    //   1   2   3   4  5   6  7   8   9  10  11  12 13  14  15 16  7 18 19 20  21
    //  0   1   2   3  4   5  6   7   8

    // 1 - 6 : 6 - 20 : 20 - 1 ---!!!!!!!
    // 2 - 14 : 14 - 13 : 13 - 11
    // 3 - 12 : 12 - 4 : 4 - 21
    // 4 - 21 : 21 - 12 : 12 - 4  -!!!!!
    // 5 - 3 : 12 - 4 : 21 - 12
    // 6 - 20 : 20

    // 2 3 1

    //i=3

    var  check = 0;
    for (var i = 0; i < preferences.length; i++) {

        var index = i+1;

        var index2 = preferences[i];

        var index3 = preferences[index2-1];

        if ( (index2 !== index3)) {

            var index4 = preferences[index3 - 1];

            if (index === index4) {
                check++;
            }
        }
       // return index+' '+index2+' '+' '+index3+' '+index4;
    }

   return check/3;

};
