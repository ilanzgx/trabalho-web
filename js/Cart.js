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

function updateCartItemAmount(productid, change) {
  let cartItems = getCartItems();
  const itemIndex = cartItems.findIndex(item => item.productid === productid);

  if (itemIndex > -1) {
    cartItems[itemIndex].amount += change;

    if (cartItems[itemIndex].amount <= 0) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem('@Cart:items', JSON.stringify(cartItems));

    $('#cart-items-counter').html(getCartItemsAmount());
    location.reload();
  }
}
