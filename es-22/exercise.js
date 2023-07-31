let primitive = 107;

switch (typeof primitive) {
  case 'number':
    console.log("El valor es de tipo numero:", primitive);
    break;
  case 'string':
    console.log("El valor es de tipo cadena:", primitive);
    break;
  case 'boolean':
    console.log("El valor es de tipo booleano:", primitive);
    break;
}
