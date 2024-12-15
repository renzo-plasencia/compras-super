import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ProductCard from './components/ProductCard'
import TotalPrice from './components/TotalPrice'
import ModalMenu from './components/ModalMenu'


function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false); // Controla el modal
  // const [products, setProducts] = useState([]); // Guarda la lista de productos
  const [products, setProducts] = useState(() => {
  // Cargar datos desde localStorage al iniciar la aplicación
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });


  useEffect(() => {
    // Guardar productos en localStorage cada vez que cambien
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  const [editProduct, setEditProduct] = useState(null);
  //Abrir modal
  // const handleOpenModal = () => setShowModal(true);

  const handleOpenModal = (product = null) => {
    if (!product) {
      // Si se abre desde el Footer, pasar el valor del input como nombre inicial
      setEditProduct({ name: footerInput || "", quantity: 1, price: "", total: 0 });
    } else {
    setEditProduct(product); // Guarda el producto a editar
    }
    setShowModal(true);
  };

  //Cierra modal
  const handleCloseModal = () => setShowModal(false);
  const [showModalMenu, setShowModalMenu] = useState(false); // Controla el modal

  const handleCloseMenu = () => setShowModalMenu(false);
  const handleOpenMenu = () => setShowModalMenu(true);

  const handleClearList = () => {
    setProducts([]);
    localStorage.removeItem('products'); //Remueve items
    setShowModalMenu(false)
  }

  const [footerInput, setFooterInput] = useState("");

  const handleFooterInputChange = (e) => setFooterInput(e.target.value);

  // Agrega un nuevo producto
  // const handleAddProduct = (product) => {
  //   setProducts([...products, product]); // Añade producto a la lista
  //   setShowModal(false); // Cierra el modal
  //   setFooterInput("");
  // };

  const handleAddProduct = (product) => {
    if (editProduct.price) {
      // Actualiza el producto existente en la lista
      const updatedProducts = products.map((p) =>
        p === editProduct ? product : p
      );
      setProducts(updatedProducts);
      setEditProduct(null); // Limpia el producto en edición
    } else {
      // Agrega un nuevo producto
      setProducts([...products, product]);
    }
    setEditProduct(null);
    setShowModal(false); // Cierra el modal
    setFooterInput("");  // Limpia el input del footer
  };

  const handleDeleteProduct = (productToDelete) => {
    const updatedProducts = products.filter((product) => product !== productToDelete);
    setProducts(updatedProducts);
  }
  

  return (
    <div className='App'>
      <Header
        onOpen={handleOpenMenu}
      />
      {showModalMenu &&
      <ModalMenu 
        onClose={handleCloseMenu}
        onNew={handleClearList}
      />}
      <div className='main-content'>
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            product={product}
            // onEdit={() => handleOpenModal(product)}
            onEdit={(product) => handleOpenModal(product)}
            onDelete={() => handleDeleteProduct(product)}
            />
        ))}
      </div>

      <TotalPrice products={products} />
      <Footer
        // onAddClick={handleOpenModal}
        // onAddClick={() => handleOpenModal({ name: footerInput || "" })}
        onAddClick={() => handleOpenModal(null)}
        onInputChange={handleFooterInputChange}
        footerInput={footerInput}
        />

      {/* Modal */}
      {showModal &&
      <Modal 
        onClose={handleCloseModal}
        onSubmit={handleAddProduct}
        // initialProductName = {footerInput}}
        initialProduct = {editProduct}
        />}
    </div>
  )
}

export default App
