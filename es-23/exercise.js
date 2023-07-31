function imprimePrecioHab(roomType) {
  switch (roomType) {
    case "Precio Habitación Básica":
      console.log("50€");
      break;
    case "Precio Habitación Junior Suite":
      console.log("80€");
      break;
    case "Precio Master Suite":
      console.log("100€");
      break;
  }
}

imprimePrecioHab("Precio Habitación Básica");
imprimePrecioHab("Precio Habitación Junior Suite ");
imprimePrecioHab("Precio Habitación Master Suite");
