import React, { useState, useEffect } from "react";
import "./Header.css";


const Header = ({ onOpen }) => {
  // Declarar el estado isMobile en el nivel superior
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Verifica el tamaño al cargar
    window.addEventListener("resize", handleResize); // Escucha cambios en el tamaño

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
