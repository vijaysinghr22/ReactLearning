import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, deleteProduct } from "./productSlice";
import productService from "./productService";
import ProductForm from "./ProductForm";
import ConfirmationPopup from "./ConfirmationPopup";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const [modalData, setModalData] = useState({ open: false, product: null });
  const [confirmMessage, setConfirmMessage] = useState("");

  useEffect(() => {
    productService.fetchProducts().then(data => dispatch(setProducts(data)));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setConfirmMessage("Product deleted successfully!");
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => setModalData({ open: true, product: null })}>Add Product</button>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name}
            <button onClick={() => setModalData({ open: true, product: p })}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {modalData.open && (
        <ProductForm
          data={modalData}
          close={() => setModalData({ open: false, product: null })}
          setConfirmMessage={setConfirmMessage}
        />
      )}

      {confirmMessage && <ConfirmationPopup message={confirmMessage} close={() => setConfirmMessage("")} />}
    </div>
  );
};

export default ProductList;
