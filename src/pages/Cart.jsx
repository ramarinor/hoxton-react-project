import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";

function Cart({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) navigate("/login");
  }, []);
  if (user === null) return <main>Loading</main>;
  return (
    <main>
      <section className="cart-container">
        <h2>Your Cart </h2>
        <ul>
          {user.cart.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </ul>
        <h3>
          Your total: €
          {user.cart.reduce(
            (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
            0
          )}
        </h3>
      </section>
    </main>
  );
}

export default Cart;
