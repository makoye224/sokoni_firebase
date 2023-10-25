import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useMediaQuery } from '@mui/material';
import { Button } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ prod }) => {
    const cardStyle = {
        marginBottom: '40px',
        height: '400px',
        backgroundColor:'#D3D3D3',
      };
    
      const cardImgStyle = {
        height: '200px',
        width: '100%',
      };
      const isLargeScreen = useMediaQuery('(min-width: 992px)');  
    
      const containerStyle = {
        backgroundColor: '#0275d8', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: isLargeScreen ? '80vh' : '90vh',
        color: 'white',
        padding: '10px',
        
      };

  const navigate = useNavigate();
  const cart = []

  const handleBuyNowClick = () => {
  };

 
  const handleAddTocart = () => {
    
  };

  useEffect(() => {
    // Scroll to the top of the page after the route change
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
     <Card style={{...cardStyle, borderRadius:'0.5rem', backgroundColor:'#F6F8FC'}}>
            <Card.Img
              variant='top'
              src='https://shorturl.at/cMNRY'
              className='img-fluid'
              style={{...cardImgStyle, borderRadius:'0.1rem', objectFit:'cover'}}
            />
            <Card.Body>
              <Card.Title style={{}}>Headphones</Card.Title>
              <Rating rating={4}/>
              <Card.Text style={{ fontSize: '12px', height: '55px', overflow: 'hidden' }}>
                Organize your entries into a specific, separate section of the application. 
                Organize your entries into a specific, separate section of the application. 
                Organize your entries into a specific, separate section of the application. 
              </Card.Text>
             <div className="d-flex ">
             <section>
              {prod?.inventory ? (
                <div className="text-danger ">
                  Out of Stock
                </div>
              ) : (
                <div
                  className="d-flex "
                  style={{ cursor: "pointer" }}
                >
                  {cart.some((item) => item?.product?.id === prod?.id) ? (
                    <Button
                      variant="default"
                      onClick={() => {
                        console.log('removed from cart')
                      }}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "1rem",
                      }}
                    >
                      Remove From Cart
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      onClick={handleAddTocart}
                      style={{
                        backgroundColor: "#1876d2",
                        borderRadius: "0.8rem",
                        color: "white",
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}
                  <Button
                    variant="success"
                    onClick={handleBuyNowClick}
                    style={{ marginLeft: "20px", borderRadius: "0.8rem" }}
                  >
                    Buy Now
                  </Button>
                </div>
              )}
            </section>
             </div>
            </Card.Body>
          </Card>
    </>
  );
};

export default Product;