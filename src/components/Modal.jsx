import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ onClose, onSubmit, initialProduct }) => {
  // const [productName, setProductName] = useState(initialProduct || "");
  // const [quantity, setQuantity] = useState(1);
  // const [price, setPrice] = useState("");
  // const [total, setTotal] = useState(0);
  const [productName, setProductName] = useState(initialProduct?.name || ""); // Nombre inicial
  const [quantity, setQuantity] = useState(initialProduct?.quantity || 1);
  const [price, setPrice] = useState(initialProduct?.price || "");
  const [total, setTotal] = useState(initialProduct ? (initialProduct.quantity * (initialProduct.price || 0)).toFixed(2) : 0);
  
  useEffect(() => {
    const calculatedTotal = (quantity * price).toFixed(2); // Multiplicación con 2 decimales
    setTotal(calculatedTotal);
  }, [quantity, price]); // Dependencias: cantidad y precio

  

  const handleSubmit = () => {
    if (!productName.trim() || !quantity || quantity <= 0 || !price || price <= 0) {
      alert("Todos los campos son obligatorios y deben ser válidos.");
      return;
    }

    // const newProduct = {
    //   name: productName,
    //   quantity: quantity,
    //   price: price,
    //   total: total
    // };

    const newProduct = { name: productName, quantity, price, total };
    onSubmit(newProduct); // Envía los datos al componente padre
  };

  return (
    <div className="modal-overlay" >
      <div className="modal-content">
        <div className="product-name"
        >
            <h3>Nuevo Producto</h3>
            <input
            type="text"
            placeholder="Nombre del producto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            />
        </div>
        
        <div className="pre-calculated">
            <div className="cantidad">
                <h3>Cantidad</h3>
                <input
                type="number"
                placeholder="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </div>
            <div className="precio">
                <h3>Precio</h3>
                <input
                type="number"
                placeholder="Precio Unitario"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || 0)}
                />
            </div>
        </div>
        
        
        <div className="calculated">
            <h3 className="calculated-name">Total</h3>
            <span className="calculated-total">{total}</span>
        </div>
        <div className="send-buttons">
            <button className="accept-button" onClick={handleSubmit}>✅</button>
            <button onClick={onClose}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
