
 var finalValueAfterOperations = function(o) {
  let x = 0;
  for( let i = 0; i<o.length; i++ ){
     if(o[i][1]==="+"){
         x++
     } else {
         x--
     }
  }
  return x;
};

// since X can only be in the beginning or end check the middle to see the operation and count that operation