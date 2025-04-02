import React from "react";
import "./PopularProduct.css";

const PopularProducts = () => {
    const products = [
        {
            id: 0,
            name: "Microsoft Xbox Series X",
            category: "Consolas",
            price: "$2.500.000",
            image: "https://exitocol.vtexassets.com/arquivos/ids/7234188/consola-xbox-series-x-1tb-microsoft.jpg?v=637532554328630000",
        },
        {
            id: 1,
            name: "Sony PlayStation 5",
            category: "Consolas",
            price: "$2.500.000",
            image: "https://exitocol.vtexassets.com/arquivos/ids/9154827/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=637631028231230000",
        },
        {
            id: 2,
            name: "Nintendo Switch",
            category: "Consolas",
            price: "$1.500.000",
            image: "https://exitocol.vtexassets.com/arquivos/ids/2458637/consola-nintendo-switch-neon-joycon-nueva-version-2019.jpg?v=637298193778300000",
        },
    ];

    return (
        <div className="popular-products">
            <h3 className="section-title centered-title"><strong>Productos más vendidos</strong></h3>
            {products.map((product) => (
                <div className="popular-product-item" key={product.id}>
                    <div className="product-info">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <span className="name">{product.name}</span>
                            <span className="category">{product.category}</span>
                        </div>
                    </div>
                    <span className="product-price">{product.price}</span>
                </div>
            ))}
        </div>
    );
};

export default PopularProducts;

