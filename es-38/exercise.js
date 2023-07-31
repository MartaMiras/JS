function printName() {
  let helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}
// Cree un cierre llamando a printName y almacenando la función interna devuelta en una variable
const greetingFunction = printName();
// Use setTimeout para imprimir el valor de helloName después de 1 segundo
setTimeout(function () {
  console.log(greetingFunction());
}, 1000);
