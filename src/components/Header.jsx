import React, { useState, useEffect } from "react";
import "./Header.css";


const Header = ({ onOpen }) => {
  return (
    <header className="header">
      <button className="menu-button" onClick={onOpen}>☰</button>
      <input
        type="text"
        className="search-bar"
        placeholder="Busca tus compras"
        aria-label="Search"
      />
    </header>
  );
};

export default Header;
