import React, { useState } from "react";
import generatePDF from "./GeneratePdf";
import "./QuotationMaker.css";

export default function QuotationMaker() {
  const [company, setCompany] = useState({ name: "", address: "", gstin: "", phone: "", date: "" });
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { name: "", hsn: "", rate: "", quantity: "", gst: "" }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const rate = parseFloat(item.rate) || 0;
      const quantity = parseFloat(item.quantity) || 0;
      const gst = parseFloat(item.gst) || 0;
      return total + (rate * quantity) + (rate * quantity * (gst / 100));
    }, 0).toFixed(2);
  };

  return (
    <div className="container">
      <h1 className="title">
      <span style={{ color: 'red' }}>Q</span>uote 
      <span style={{ color: 'green' }}> M</span>aster
      </h1>

      <div className="company-details card">
  <div className="company-content">
    <div className="input-group">
      <label>Company Name :</label>
      <input className="input" value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} />
    </div>

    <div className="input-group">
      <label>Company Address :</label>
      <input className="input" value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} />
    </div>

    <div className="input-group">
      <label>GSTIN :</label>
      <input className="input" value={company.gstin} onChange={(e) => setCompany({ ...company, gstin: e.target.value })} />
    </div>

    <div className="input-group">
      <label>Phone No :</label>
      <input className="input" value={company.phone} onChange={(e) => setCompany({ ...company, phone: e.target.value })} />
    </div>

    <div className="input-group">
      <label>Date :</label>
      <input className="input" type="date" value={company.date} onChange={(e) => setCompany({ ...company, date: e.target.value })} />
    </div>
  </div>
</div>

      <h2>Items List</h2>
      {items.map((item, index) => (
          
        <div key={index} className="card">
          <div className="card-content grid">
            <input className="input" placeholder="Item Name" value={item.name} onChange={(e) => updateItem(index, "name", e.target.value)} />
            <input className="input" placeholder="HSN Code" value={item.hsn} onChange={(e) => updateItem(index, "hsn", e.target.value)} />
            <input className="input" placeholder="Rate" type="number" value={item.rate} onChange={(e) => updateItem(index, "rate", e.target.value)} />
            <input className="input" placeholder="Quantity" type="number" value={item.quantity} onChange={(e) => updateItem(index, "quantity", e.target.value)} />
            <input className="input" placeholder="GST %" type="number" value={item.gst} onChange={(e) => updateItem(index, "gst", e.target.value)} />
            <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
          </div>
        </div>
      ))}

      <button className="button" onClick={addItem}>Add Item</button>
      <div className="total">Total: ₹{calculateTotal()}</div>
      <button className="button" onClick={() => generatePDF(company, items)}>
        Generate PDF
      </button>
    </div>
  );
}


