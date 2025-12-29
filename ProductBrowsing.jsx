import { useState } from "react";

export default function ProductBrowsing() {
  const categories = ["Electronics", "Clothing", "Accessories"];
  const [activeCategory, setActiveCategory] = useState("Electronics");

  const products = {
    Electronics: [
      { id: 1, name: "Smartphone", price: 499, image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww" },
      { id: 2, name: "Laptop", price: 899, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    ],
    Clothing: [
      { id: 3, name: "T-Shirt", price: 25, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D" },
      { id: 4, name: "Jeans", price: 60, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amVhbnN8ZW58MHx8MHx8fDA%3D" },
    ],
    Accessories: [
      { id: 5, name: "Watch", price: 120, image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" },
      { id: 6, name: "Sunglasses", price: 80, image: "https://images.unsplash.com/photo-1567473810954-507d59716c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1biUyMGdsYXNzfGVufDB8fDB8fHww" },
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        {/* Header */}
        <header style={styles.header}>
          <h1>🛍️ Product Browser</h1>
        </header>

        {/* Category Tabs */}
        <div style={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                ...styles.categoryBtn,
                backgroundColor: activeCategory === cat ? "#2563eb" : "rgba(255,255,255,0.8)",
                color: activeCategory === cat ? "#fff" : "#111",
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={styles.grid}>
          {products[activeCategory].map((p) => (
            <div key={p.id} style={styles.card}>
              <img src={p.image} alt={p.name} style={styles.productImage} />
              <h3 style={styles.productName}>{p.name}</h3>
              <p style={styles.productPrice}>${p.price}</p>
              <button style={styles.button}>View Product</button>
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
    backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: "20px",
    color: "#fff",
  },

  header: {
    textAlign: "center",
    marginBottom: "20px",
  },

  categories: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  categoryBtn: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    color: "#111",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: "350px",
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
