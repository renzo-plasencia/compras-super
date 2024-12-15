import React, { useState, useEffect } from "react";
import "./ModalMenu.css";

const ModalMenu = ({ onClose, onNew }) => {
    
    
    return (
        <div className="container-modal-menu">
            <span className="close-button-menu" onClick={onClose}>X</span>
            <div className="main-container-menu">
                <h1>¡Anota tus compras!</h1>
                <div className="buttons">
                    <button className="new-list" onClick={onNew}>Nueva lista</button>
                </div>
            </div>
        </div>
    )
}

export default ModalMenu