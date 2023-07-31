function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}
// Creacion de 2 objetos diferentes
const smartphone1 = new Smartphone("Apple", "iPhone 13", 1300);
const smartphone2 = new Smartphone("Samsung", "Galaxy S21", 1000);
console.log(smartphone1);
console.log(smartphone2);
