import React, { useEffect,useState} from 'react';
import {Link} from "react-router-dom";

function Iphone() {
  const [products, setProducts] =useState([]);
 
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Error: unble to fetch"));
  }, []);

console.log(products)

  let turn = true;
 return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <div className="title-wraper font-weight-bold">Iphones</div>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product) => {
            let order1 = 1;
            let order2 = 2;
            if (turn) {
              order1 = 2;
              order2 = 1;
              turn = !turn;
            } else {
              turn = !turn;
            }
            

            let productDiv = (
              <div
                key={product.product_url}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.Price_range}</div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_url}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={product.product_img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;