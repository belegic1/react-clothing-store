

export const addItemToCart = (cartItems, cartItemtoAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemtoAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemtoAdd.id ?  {...cartItem, quantity: cartItem.quantity + 1}: cartItem)
    }
    return [...cartItems, {...cartItemtoAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemtoRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id)
}


export const decriseItemQuantity = (cartItems, cartItemtoDecrise) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemtoDecrise.id)

    if (existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === cartItemtoDecrise.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    }
    return removeItemFromCart(cartItems,cartItemtoDecrise)
}