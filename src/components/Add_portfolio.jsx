import React, { useState } from "react";

const Add_portfolio = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState(""); // NEW STATE
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("https://dwsbackend-3.onrender.com/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Using schema keys: title, image and link
        body: JSON.stringify({ title, image: imageUrl, link }), // UPDATED
      });
      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error("Failed to post portfolio: " + errorDetail);
      }
      setMessage("Portfolio added successfully!");
      setTitle("");
      setImageUrl("");
      setLink(""); // CLEAR NEW STATE
    } catch (error) {
      setMessage("Error: " + error.message);
      console.error("Portfolio POST error:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{
      marginTop: "1rem",
      padding: "2rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      margin: "1rem auto",
      background: "#fff"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Add Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="title" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="imageUrl" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}
            required
          />
        </div>
        {/* NEW FIELD for 'link' */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="link" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Link
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter link"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}
            required
          />
        </div>
        <button type="submit" disabled={loading} style={{
          width: "100%",
          padding: "0.75rem",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          {loading ? "Posting..." : "Add Portfolio"}
        </button>
      </form>
      {message && <p style={{ textAlign: "center", marginTop: "1rem" }}>{message}</p>}
    </div>
  );
};

export default Add_portfolio;