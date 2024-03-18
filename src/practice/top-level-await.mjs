import { products  } from "./products.mjs";

console.log(products);
console.log(products.map(item => item.id).filter(item => item >= 42));
console.log('HEY!');