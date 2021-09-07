import './ProductPage.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

//Action
import { getProductDetails } from "../redux/action/productActions";
import { addToCart } from "../redux/action/cartActions";

function ProductPage({ match, history }) {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const ProductDetails = useSelector(state => state.getProductDetails);
    const { product, loading, error } = ProductDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id)
            dispatch(getProductDetails(match.params.id));
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push('/cart')
    }

    return (
        <div className="productpage">
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
                <>
                    <div className="productpage_left">
                        <div className="left_image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left_info">
                            <p className="left_name">{product.name}</p>
                            <p >Price: ${product.price}</p>
                            <p >{product.description}</p>
                        </div>
                    </div>
                    <div className="productpage_right">
                        <div className="right_info">
                            <p className="">Price: <span>${product.price}</span></p>
                            <p >Status:<span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                            <p>Qty
                        <select value={qty} onChange={(e) => setQty(e.target.value)} id="">
                                    {[...Array(product.countInStock).keys()].map((item) => (
                                        <option key={item + 1} value={item + 1}>{item + 1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductPage;
