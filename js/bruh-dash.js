var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arrParam) {
    //console.log(arrParam.join(" , "));
    return arrParam[0];
  },

  // returns the last element of an array
  last: function (arrParam) {
    //console.log(arrParam.join(" , "));
    return arrParam[arrParam.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arrParam, valParam) {
    //console.log(arrParam.join(" , "));
    //console.log(valParam);
    var found = arrParam.indexOf(valParam);
    return found;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arrParam, valParam) {
    //console.log(arrParam.join(" , "));
    //console.log(valParam);
    var found = arrParam.lastIndexOf(valParam);
    return found;
  },

  // returns an array with all elements except for the last element
  initial: function (arrParam) {
    //console.log(arrParam.join(" , "));
    arrParam.pop();
    return arrParam;
  },
  
  // returns an array with all falsey values removed
  compact: function (arrParam) {
    //console.log(arrParam.join(" , "));
    var falseValues = [
      false, null, 0, "", undefined, NaN
    ];
    function removeFalseyValues(value){
      var valid = true;
      for (count = 0; count < falseValues.length; count++){
        //console.log(value);
        //console.log(falseValues[count]);
        //undefined, null, NaN, 0, "" (empty string), and false values
        //are considered falsey inherently. Therefore in the future we can 
        //supply the value of an array element to an if directly.
        if (value === falseValues[count] || isNaN(value)){
          valid = false;
        }
      }
      return valid; 
    }
    var result = arrParam.filter(removeFalseyValues);
    return result;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arrParam, startParam, endParam) {
    //console.log(arrParam.join( " , "));
    //console.log(startParam);
    //console.log(endParam);
    var result = arrParam.slice(startParam, endParam);
    return result;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arrParam, numParam){
    //console.log(arrParam);
    //console.log(numParam);
    if (numParam === undefined)
    {
      arrParam.shift();
    } else if (numParam > 0){
      for (count = 0; count < numParam; count++){
        arrParam.shift();
      }
    }
    return arrParam;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arrParam, numParam) {
    //console.log(arrParam);
    //console.log(numParam);
    if (numParam === undefined)
    {
      arrParam.pop();
    } else if (numParam > 0){
      for (count = 0; count < numParam; count++){
        arrParam.pop();
      }
    }
    return arrParam;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arrParam, numParam) {
    //console.log(arrParam);
    //console.log(numParam);
    var results = [];
    if (numParam === undefined){
      results = arrParam.slice(0,1);
    } else if (numParam > 0){
      results = arrParam.slice(0, numParam);
    }
    return results;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arrParam, numParam) {
    //console.log(arrParam);
    //console.log(numParam);
    var results = [];
    if (numParam === undefined){
      results = arrParam.slice(arrParam.length - 1, arrParam.length);
      return results;
    }
    results = arrParam.slice(arrParam.length - numParam, arrParam.length);
    return results;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arrParam, valParam, startParam, endParam){
    //console.log(arrParam);
    //console.log(valParam);
    //console.log(startParam);
    //console.log(endParam);
    var results = arrParam.fill(valParam, startParam, endParam);
    return results; 
  },

  // removes all given values from an array
  pull: function (arrParam, valParam, valParam2) {
    //console.log(arrParam);   Is A, B, C
    //console.log(valParam);  Is A
    //console.log(valParam2);  Is B
    var valIndex;
    function isSame(element){
      return element === valParam || element === valParam2;
    }
    do {
      valIndex = arrParam.findIndex(isSame);
      if (valIndex !== -1){
      arrParam.splice(valIndex, 1);
      }
    } while (valIndex !== -1)
    return arrParam;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr1, arr2) {
    results = [];
    // for each element of arr2, push the value contained at the specified
    // element of arr1 into results. 
    arr2.forEach(
      function (element) {
        results.push(arr1[element]);
      }
    )
    return results;
  },

  // creates an array excluding all the specified values
  without: function(arr, val1, val2) {
    newArr = [];
    for (var i = 0; i < arr.length; i++){
      // if the value of that element is not equal to value1 and value2
      if ((arr[i] !== val1) && (arr[i] !== val2)) {
       newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    var indexOfNum = 0;
    // for each element of the exclusion array
    for (var i = 0; i < arr2.length; i++){
      // do this check at least once and continue doing it until the
      // given condition evaluates to false. in this case we want 
      // indexOf to give a variable a -1, indicating that no more 
      // elements can be found in arr1 containing the value specified by
      // the current element of arr2.
      do {
        // update indexOfNum for that execution
        indexOfNum = arr1.indexOf(arr2[i]);
        // if indexOfNum hasn't been given -1
        if (indexOfNum !== -1){
          arr1.splice(indexOfNum, 1);
        }
      } while (indexOfNum !== -1)
    }
    return arr1;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
