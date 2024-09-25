import * as cartModule from './services/cart.js';
// import * as ItemModule from './services/item.js'

import createItem from "./services/item.js";
const myCart = [];
const myWishList = []

console.log('Bem-vindo(a) ao carrinho de compras da Shopee!')

const item1 = await createItem("Hot-Wheels", 20.99, 1);
const item2 = await createItem("LEGO", 110.49, 1);

// console.log(item2.subtotal())

await cartModule.addItem(myCart, item1)
await cartModule.addItem(myCart, item2)
await cartModule.deleteItem(myCart, item1.name)


console.log('Shopee Total Cart')
await cartModule.calculateTotel(myCart)