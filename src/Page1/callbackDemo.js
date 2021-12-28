
// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
function genericPoemMaker(name, gender) {
  console.log(name + " is finer than fine wine.");
  console.log("Altruistic and noble for the modern time.");
  console.log("Always admirably adorned with the latest style.");
  console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.
function getUserInput(firstName, lastName, gender, callback) {
  var fullName = firstName + " " + lastName;

  // Make sure the callback is a function
  if (typeof callback === "function") {
    // Execute the callback function and pass the parameters to it
    callback(fullName, gender);
  }
}
