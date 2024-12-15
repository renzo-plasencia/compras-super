import React, { useState } from 'react'
import './TotalPrice.css'

const TotalPrice = ({ products }) => {
    const totalPrice = products.reduce((sum, product) => sum + Number(product.total), 0);

    return (
      <div className="total-price">
        <h3>Total Final:</h3>
        <strong className='total'>S/. {totalPrice.toFixed(2)}</strong>
      </div>
    );
  };
  
  export default TotalPrice;