import React from "react";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}>
      
      {/* Header / Navbar */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 50px", backgroundColor: "#121240" }}>
        <h1 style={{ fontSize: "1.8rem" }}>BOOKWORM-APP</h1>
        <nav>
          <a href="#" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Categories</a>
          <a href="#" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>New Arrivals</a>
          <a href="#" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>About Us</a>
          <a href="#" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section – Full height */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>The Silent Stars by Elara Vance</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
          A gripping space opera that explores the boundaries of human endurance and cosmic mystery across distant galaxies.
        </p>
        <button style={{
          padding: "10px 25px",
          fontSize: "1rem",
          backgroundColor: "#1e3a8a",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          color: "#fff"
        }}>
          View Book
        </button>
      </section>

      {/* Secondary Search Section */}
      <section style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#0b0b22" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Find Your Next Great Read</h3>
        <input 
          type="text" 
          placeholder="Search by title, author, or keyword..." 
          style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc", marginRight: "10px" }} 
        />
        <button style={{ padding: "10px 20px", backgroundColor: "#1e3a8a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Search
        </button>
        <p style={{ marginTop: "15px" }}>Explore millions of books from various genres.</p>
      </section>
      
    </div>
  );
};

export default HomePage;
