import { Link } from "react-router-dom";
import './products.css';

const Products = ({ imageUrl, name, price, description, productId }) => {
    return (
        <div className="product">
            <img src={imageUrl}
                alt={name} />

            <div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">
                    {description.substring(0, 100)}...
                   {/*  Lorem ipsium dolor sit amet cosectetur adipisicing elit. Eaque voluptate oanis
                    common Dirnesciunt ipsue nesciumt officials? */}
                </p>
                <p className="info_price"> ${price} {/* $499.99 */}</p>

                <Link to={`/product/${productId}`} className="info_button">View</Link>
            </div>
        </div>
    )
}

export default Products
