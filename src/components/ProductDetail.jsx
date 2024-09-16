import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-red-500 mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold">${product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;