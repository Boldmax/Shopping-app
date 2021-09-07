import "./CartItem.css";
import { Link } from "react-router-dom";


const CartItem = ({ item, qtyChangeHandler, removefromcart }) => {
    return <div className="cartitem">
        <div className="cartitem_image">
            <img src={item.imageUrl}
                alt={item.name} />
        </div>

        <Link to={`/product/${item.product}`} className="cartitem_name">
            <p>{item.name}</p>
        </Link>
        <p className="cart_price">${item.price}</p>
        <select className="cartitem-select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
            {[...Array(item.countInStock).keys()].map(n => (
                <option key={n + 1} value={n + 1} >{n + 1}</option>
            ))}

        </select>
        <button className="cartitem_deletebtn" onClick={() => removefromcart(item.product)}>
            <i className="fas fa-trash"></i>
        </button>
    </div>
}

export default CartItem;