import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg shadow-lg">
                        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                              <p className="text-gray-600">${product.price}</p>
                            <Link to={`/product/${product.id}`} className="mt-4 inline-block text-orange-500">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Home;