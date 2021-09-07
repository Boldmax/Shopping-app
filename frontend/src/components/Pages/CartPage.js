import './CartPage.css';
import CartItem from '../cartItem/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// action 
import { addToCart, removeFromCart } from "../redux/action/cartActions";

function CartPage() {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    };

    const removefromcart = (id) => {
        dispatch(removeFromCart(id))
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    const subTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    };

    return (
        <div className="cartpage">
            <div className="cartpage_left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/" ></Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem key={item} item={item} qtyChangeHandler={qtyChangeHandler} removefromcart={removefromcart} />
                ))}

            </div>

            <div className="cartpage_right">
                <div className="cartscreen_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${subTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button> Proceed to checkout </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage;
