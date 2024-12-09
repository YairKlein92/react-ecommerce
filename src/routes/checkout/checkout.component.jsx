import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>I am heckout page</h1>
      <div>
        {cartItems.map((item) => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h2> {name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>remove</span>
              <span onClick={() => addItemToCart(item)}>add</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Checkout;
