import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
const Token=localStorage.getItem('token');

const Addproduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    name: "",
  });

  const { name } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const headers={
    'Authorization':`Bearer ${Token}`
}  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://51.195.148.112/api/admin/product-type/", product,{
        headers:headers
    });
    history.push("/dashboard");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
        
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
