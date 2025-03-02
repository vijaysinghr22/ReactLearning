import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "./productSlice";

const ProductForm = ({ data, close }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(data.product ? data.product.name : "");

  const handleSubmit = () => {
    if (data.product) {
      dispatch(editProduct({ ...data.product, name }));
    } else {
      dispatch(addProduct({ id: Date.now(), name }));
    }
    close();
  };

  return (
    <div className="modal">
      <h3>{data.product ? "Edit Product" : "Add Product"}</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={close}>Cancel</button>
    </div>
  );
};

export default ProductForm;
