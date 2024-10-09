import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assests/style/Task1.css";


export default function Task1() {
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = product.filter(
      (item) => item.price >= details.from && item.price <= details.to
    );
    setData(filteredData);
  };

  return (
    <div className="main-container">
      <h1>JSON DATA</h1>
      <div className="table-container">
        {
        data.length > 0? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Image</th>
              <th>Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>

                <td>{item.rating}</td>
                <td>{item.stock}</td>

                <td>{item.availabilityStatus}</td>
                <td>
                  <img src={item.images} alt={item.title} />
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table> ):" "}
        
      </div>
    </div>
  );
}
