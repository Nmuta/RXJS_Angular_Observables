var fruits = [ 'apple', 'orange', 'peach', 'grape', 'mango' ];

var nu = fruits.find(function(f) {
  console.log("passing")
  return f === "mango"; 
});

console.log("nu is "+nu);
