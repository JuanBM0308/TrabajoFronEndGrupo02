import './productdetailspage.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  addDoc,
  collection,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ProductData } from '../../../util/ProductData';
import {
  auth,
  db,
} from '../../firebase/FireBase'; // Ruta corregida

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const newData = ProductData.filter((product) => product.id === parseInt(id));
    if (newData.length > 0) {
      setProductData(newData[0]);
      setMainImage(newData[0].image1);
    }
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  
  const addToCart = async () => {
    if (!user) {
      toast.error('Debes estar logueado para agregar productos al carrito');
      return;
    }

    try {
      await addDoc(collection(db, 'cart'), {
        userId: user.uid,
        productId: productData.id,
        name: productData.name,
        price: productData.price,
        quantity,
      });
      toast.success('Producto agregado al carrito');
    } catch (error) {
      toast.error('Error al agregar el producto al carrito');
    }
  };

  return (
    <section className='product-details'>
      <div className="row mt-5">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <img className="main-img p-3" src={mainImage} alt="producto" id="mainImg" />
          <div className="small-img-group p-2">
            <div className="small-img-col">
              <img
                src={productData.image1}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image1)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={productData.image2}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image2)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={productData.image3}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image3)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={productData.image4}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image4)}
              />
            </div>
          </div>
        </div>

        <div className="detail col-lg-6 col-md-12 col-12 mx-3">
          <h6>{productData.category}</h6>
          <h3 className="py-4">{productData.name}</h3>
          <h2>{productData.price}</h2>
          <div className="stock-info mt-4 mb-3">
            <h6>Stock : {productData.stock} unidades</h6>
          </div>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="buy-btn" onClick={addToCart}>Agregar al Carrito</button>
          <h4 className="mt-5 mb-5">Detalles del Producto</h4>
          <span>{productData.description}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
