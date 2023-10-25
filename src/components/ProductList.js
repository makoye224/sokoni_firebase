import React, { useEffect} from "react";
import {
  Col,
  Row,
} from "react-bootstrap";
import Product from "./Product";
;

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const products = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <>
      <div className="container">
        <br />
        <section>
            <div>
              <Row>
                {products.map((prod) => (
                  <Col key={prod.id} lg={4} md={6} xs={12}>
                    <Product prod={prod} />
                    <br />
                  </Col>
                ))}
              </Row>
            </div>
          </section>
          </div>
    </>
  );
};

export default ProductList;