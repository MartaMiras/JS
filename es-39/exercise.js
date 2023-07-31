function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return value * number;
  }
  console.log(inner());
}
// Llame a la función multiplicar por dos con el valor 5 (o cualquier valor deseado)
multiplyByTwo(5);
