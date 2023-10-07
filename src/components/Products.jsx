import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Products = ({ setCartValue }) => {
  const [ConsumerProducts, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  }

  const CalculatePrice = (price, discountPercentage) => {

    let newPrice = price;
    if (price > 1000) {
      newPrice = (price * discountPercentage / 100).toFixed(2);
      return (
        <>
          <span className="text-muted"><s>${price}</s></span>&nbsp;${newPrice}
        </>
      )
    }
    return (
      <>
        ${newPrice}
      </>
    )
  };

  const [cart, setCart] = useState([]);
  const addToCart = (title) => {
    const newCart = [...cart, title];
    setCart(newCart);
    setCartValue((prevCartValue) => prevCartValue + 1);
  }

  const removeFromCart = (title) => {
    const newCart = cart.filter((item) => item !== title);
    setCart(newCart);
    setCartValue((prevCartValue) => prevCartValue - 1);
  }

  useEffect(() => {
    // Statements to be executed right after RealDOM Component Mounting
    // setInterval(intervalCallback, 5000);
    getProducts();
  }, []);

  const ProductCard = ({ stock, discountPercentage, thumbnail, title, price, rating }) => {
    console.log(title);
    return (
      <div className="col mb-5">
        <div className="card h-100">
          {stock > 10 ?
            <div className="badge bg-dark text-white position-absolute"
              style={{ top: '0.5rem', right: '0.5rem' }}> Sale</div>
            : ""}
          {thumbnail && (<img className="card-img-top" alt={title} style={{
            height: '150px',
            width: '100%'
          }}
            src={thumbnail}
          />)}

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{title}</h5>
              {CalculatePrice(price, discountPercentage)}
            </div>
          </div>
          <div className="d-flex justify-content-center small text-warning mb-2">
            <div className={rating > 0 ? "bi-star-fill" : "bi-star"}></div>
            <div className={rating > 1 ? "bi-star-fill" : "bi-star"}></div>
            <div className={rating > 2.5 ? "bi-star-fill" : "bi-star"}></div>
            <div className={rating > 3.5 ? "bi-star-fill" : "bi-star"}></div>
            <div className={rating > 4.5 ? "bi-star-half" : "bi-star"}></div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {cart.find((element) => element === title) ? (
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => removeFromCart(title)}>
                  Remove
                </a></div>
            ) : (
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => addToCart(title)}>
                  Add to Cart
                </a></div>
            )}
          </div>
        </div>
      </div>

    )
  };
  ProductCard.propTypes = {
    stock: PropTypes.number, // Optional
    discountPercentage: PropTypes.number, // Optional
    thumbnail: PropTypes.string, // Optional
    title: PropTypes.string.isRequired, // Must Have prop
    price: PropTypes.number,
    rating: PropTypes.number, // array of strings
  }

  Products.propTypes = {
    setCartValue: PropTypes.number, // Optional
  }


  return (
    <>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* {console.log(ConsumerProducts)} */}
          {ConsumerProducts.map((details) => (
            <ProductCard
              // backgroundColor={details.backgroundColor}
              stock={details.stock}
              discountPercentage={details.discountPercentage}
              thumbnail={details.thumbnail}
              title={details.title}
              price={details.price}
              rating={details.rating}
              // {...details}
              key={details.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products