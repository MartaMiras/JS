const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};
Object.freeze(smartphone); // Congelar el objeto del teléfono inteligente
smartphone.price = 100;
console.log(smartphone);
