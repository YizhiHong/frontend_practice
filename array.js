(function() {
  var list = ["foo", "bar", "john"];
  console.log(list.splice(1));  // return the subarray from 1 to the end => ["bar","john"]
  console.log(list.splice(1, 2)); // couldn't splice because only ["foo"] left, so => []
  console.log(list); // ["foo"]
})();
