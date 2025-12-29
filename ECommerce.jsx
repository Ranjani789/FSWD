import { useState } from "react";

export default function ECommerceSimulation() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Smartphone", price: 499, image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Laptop", price: 899, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 3, name: "Headphones", price: 199, image: "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Smartwatch", price: 149, image: "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        {/* Header */}
        <header style={styles.header}>
          <h1>🛒 E-Commerce Store</h1>
          <div style={styles.cart}>
            🛍️ Cart: <span>{cart.length}</span>
          </div>
        </header>

        {/* Products Grid */}
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>${product.price}</p>
              <button style={styles.button} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: "url('https://images.unsplash.com/photo-1581291519195-ef11498d1cf0')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: "20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    marginBottom: "20px",
  },

  cart: {
    backgroundColor: "#2563eb",
    padding: "6px 12px",
    borderRadius: "8px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  productName: {
    marginBottom: "5px",
  },

  productPrice: {
    fontWeight: "bold",
    marginBottom: "10px",
  },

  button: {
    padding: "10px 15px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
