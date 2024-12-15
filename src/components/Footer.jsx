import React, { useState, useEffect } from "react";
import "./Footer.css";


const Footer = ({ onAddClick, onInputChange, footerInput }) => {
  return (
    <footer className="footer">
        <input
          type="text"
          className="input-bar"
          placeholder="Ingresa un producto"
          aria-label="Add product"
          value={footerInput}
          onChange={onInputChange}
        />
        <button className="add-button" onClick={onAddClick}>+</button>
    </footer>
    
  );
};

export default Footer;
