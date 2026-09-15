
function removeFromCart(cart, itemId) {
  return cart.filter(i => i.id !== itemId);
}
module.exports.removeFromCart = removeFromCart;
