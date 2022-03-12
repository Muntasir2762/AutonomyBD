import React from 'react'

const Home = () => {
  return (
    <div>
      Welcome to Home!
    </div>
  )
}

export default Home


/*


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Token=localStorage.getItem('token');

const DashBoard = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const headers={
        'Authorization':`Bearer ${Token}`
    }  
    axios.get(" http://51.195.148.112/api/admin/product-type/",{headers:headers}).then(res=>setProduct(res.data.data))
  }, []);

  return (
    <div className="w-full mt-12">
      <main class="w-full flex-grow p-6">
      <h1 className="text-3xl text-black pb-6">Products</h1>
      <div className="bg-white overflow-auto">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">#</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product, index) => (
            <tr class="hover:bg-grey-lighter">
            <td class="py-4 px-6 border-b border-grey-light">{index + 1}</td>
            <td class="py-4 px-6 border-b border-grey-light">{product.name}</td>
            <td class="py-4 px-6 border-b border-grey-light">{product.id}</td>
            <td class="py-4 px-6 border-b border-grey-light">
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to=""
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                  
                  >
                    Delete
                  </Link>
              </td>

          </tr>

          ))}
            
          </tbody>
        </table>
      </div>
        </main>
      
      
    </div>
  )
}

export default DashBoard


*/