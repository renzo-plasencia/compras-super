import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <div className="header-card">
        <button className="edit-button" onClick={() => onEdit(product)}
        >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7422 2.90749C13.7247 2.79686 13.5472 1.80311 12.8272 1.07749C12.1041 0.369986 11.1066 0.194986 10.9953 0.177486C10.8472 0.153111 10.6959 0.184361 10.5691 0.263111C10.5247 0.290611 9.87281 0.698736 8.58594 1.78686C9.24781 2.02061 10.1034 2.42624 10.7972 3.10499C11.4934 3.78624 11.9097 4.62436 12.1484 5.27436C13.2234 4.01811 13.6278 3.38186 13.6547 3.33811C13.7347 3.20999 13.7659 3.05686 13.7422 2.90749Z" fill="#C8A8E9"/>
    <path d="M7.4693 2.76436C6.79867 3.36936 6.01805 4.10436 5.1243 4.99186C1.33492 8.75436 0.341172 10.2587 0.300547 10.3206C0.243672 10.4081 0.209297 10.5087 0.201172 10.6125L0.0017967 13.1569C-0.0119533 13.3394 0.0536718 13.5181 0.183047 13.6475C0.300547 13.765 0.459922 13.8306 0.625547 13.8306C0.641172 13.8306 0.657422 13.8306 0.673672 13.8287L3.2368 13.6312C3.33992 13.6231 3.4393 13.59 3.52617 13.5344C3.58867 13.4944 5.10305 12.5075 8.8918 8.74561C9.80555 7.83811 10.5593 7.04811 11.1762 6.37248C11.0818 5.96686 10.7524 4.80936 9.92305 3.99873C9.0818 3.17561 7.8718 2.85311 7.4693 2.76436Z" fill="#C8A8E9"/>
        </svg>
        </button>
        
        <h4>{product.name}</h4>
        <button className="close-button" onClick={onDelete}>X</button>
      </div>

      <div className="footer-card">
        <span className="cantidad">Cantidad: {product.quantity}</span>
        <strong className="precioFinal">Precio Final: {product.total}</strong>
        <span className="precio">Precio Unit.: {product.quantity}</span>
      </div>
    </div>
  );
};

export default ProductCard;
