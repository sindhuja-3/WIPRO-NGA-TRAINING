import React, { useState } from "react";

function Inventory() {
  const [stock, setStock] = useState(0);

 
  const addStock = () => {
    setStock(stock + 1);
  };

 
  const removeStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Inventory Management</h2>

      
      <h3>Current Stock: {stock}</h3>

     
      <div style={styles.buttons}>
        <button onClick={addStock}>Add Stock</button>

        <button
          onClick={removeStock}
          disabled={stock === 0}
        >
          Remove Stock
        </button>
      </div>

      
      {stock === 0 && <p style={{ color: "red" }}>Stock is empty!</p>}
    </div>
  );
}

export default Inventory;


const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px"
  }
};