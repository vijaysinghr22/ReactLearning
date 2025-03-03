import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "./productSlice";

const ProductForm = ({ data, close, setConfirmMessage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(data.product ? data.product.name : "");

  const handleSubmit = () => {
    if (data.product) {
      dispatch(editProduct({ ...data.product, name }));
      setConfirmMessage("Product updated successfully!");
    } else {
      dispatch(addProduct({ id: Date.now(), name }));
      setConfirmMessage("Product added successfully!");
    }
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{data.product ? "Edit Product" : "Add Product"}</h3>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Product Name" />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
