import './Homepage.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// component
import Product from '../products/products';

// actions
import { getProducts as listProducts } from "../redux/action/productActions";

function HomePage() {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div className="homesreen">
            <h2 className="homesreen_title">Latest Product</h2>
            <div className="homesreen_products">
                {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (products.map((product) => (
                    <Product productId={product._id}
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))
                )}
            </div>
        </div>
    )
}

export default HomePage;