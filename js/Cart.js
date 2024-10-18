function getCartItems() {
  const items = JSON.parse(localStorage.getItem('@Cart:items'));
  return items ? items : [];
}

function getCartItemsAmount() {
  return getCartItems().length;
}

function addCartItem(productid, amount) {
  let cartItems = getCartItems();

  const itemIndex = cartItems.findIndex(item => item.productid === productid);

  if(itemIndex > -1) {
    cartItems[itemIndex].amount += amount;
  } else {
    cartItems.push({ productid, amount });
  }

  localStorage.setItem('@Cart:items', JSON.stringify(cartItems));
}

function removeCartItem(productid) {
  let cartItems = getCartItems();
  cartItems = cartItems.filter(item => item.productid !== productid);
  localStorage.setItem('@Cart:items', JSON.stringify(cartItems));
}