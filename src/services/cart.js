async function addItem (userCart, item) {
    userCart.push(item);

}

async function deleteItem(userCart, nameItem) {
    
}

async function removeItem(userCart, indexCart) {
    
}

async function calculateTotel(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotel
}