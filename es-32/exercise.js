function printName(name) {
  console.log(name);
}
function sayHelloName(callback) {
  console.log("Hello");
  setTimeout(function () {
    callback("luis");
  }, 1000);
}
sayHelloName(printName);
