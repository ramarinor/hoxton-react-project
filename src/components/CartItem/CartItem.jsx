import "./CartItem.css";
function CartItem({ cartItem }) {
  return (
    <li className="cart-container__item">
      <img
        src="../../../assets/paints/kigali.png"
        alt={`${cartItem.id} ${cartItem.type}`}
        width="90"
      />
      <p>{`${cartItem.id} ${cartItem.type}`}</p>
      <p className="quantity">
        <button className="cta cart-button">-</button>
        <span>{cartItem.quantity}</span>
        <button className="cta cart-button">+</button>
      </p>
    </li>
  );
}

export default CartItem;
