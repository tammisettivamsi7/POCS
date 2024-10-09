import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assests/style/Task1.css";
import DataTable from "react-data-table-component";

export default function Task1() {
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({
    from: "",
    to: "",
  });

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

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = product.filter(
      (item) => item.price >= details.from && item.price <= details.to
    );
    setData(filteredData);
  };

  const columns = [
    {
      name: "ID",
      selector: (item) => item.id,
    },
    {
      name: "IMAGE",
      selector: (item) => item.images,
      cell: (item) => <img src={item.images} alt={item.title} width="50" />,
    },

    {
      name: "TITLE",
      selector: (item) => item.title,
    },
    {
      name: "RATING",
      selector: (item) => item.rating,
    },
    {
      name: "STOCK",
      selector: (item) => item.stock,
    },
    {
      name: "STATUS",
      selector: (item) => item.availabilityStatus,
    },

    {
      name: "PRICE",
      selector: (item) => item.price,
      sortable: true,
    },
  ];

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#f1f1f1",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    rows: {
      style: {
        minHeight: "72px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        borderRight: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  };

  return (
    <div className="main-container">
      <h1>JSON DATA</h1>
      <form onSubmit={handleSubmit} className="form-Container">
        <input
          type="number"
          placeholder="FROM PRICE"
          name="from"
          value={details.from}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="TO PRICE"
          name="to"
          value={details.to}
          onChange={handleChange}
          required
        />
        <input type="submit" className="button-item" />
      </form>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
      />
    </div>
  );
}
