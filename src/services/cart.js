async function addItem (userCart, item) {
    userCart.push(item);

}
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem)

    if (index != -1){
        userCart.splice(index, 1);
    }

}

async function removeItem(userCart, indexCart) {
    
}

async function displayCart(userCart) {
    console.log('Shopee cart list')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} -- R$ ${item.price} - ${item.quantity}`)
    });
}

async function calculateTotel(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotel,
    displayCart
}