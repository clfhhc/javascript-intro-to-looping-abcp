function forLoop(array) {
  var newArray=array
  for (let i=0; i<25; i++) {
    newArray=[...newArray,`I am ${i} strange loop${i === 1 ? '' : 's'}.`]
  }
  return newArray;
}

function whileLoop(n) {
  while (n>0) {
    n--;
    console.log(n);
  }
 return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length>0 && maybeTrue())
  return array;
}