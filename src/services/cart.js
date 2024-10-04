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
    const deleteIndex = indexCart - 1
    if (indexCart >= 0 && indexCart < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}

async function displayCart(userCart) {
    console.log('Shopee cart list')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} -- R$ ${item.price} - ${item.quantity}`)
    });
}

async function calculateTotel(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`)
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotel,
    displayCart
}