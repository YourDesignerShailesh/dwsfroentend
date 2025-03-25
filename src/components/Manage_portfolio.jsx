import React, { useState, useEffect } from "react";

const Manage_portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [editedLink, setEditedLink] = useState("");

  useEffect(() => {
    fetch("https://dwsbackend-3.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setPortfolios(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this portfolio?")) return;
    try {
      const response = await fetch(`https://dwsbackend-3.onrender.com/api/portfolio/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      setPortfolios(portfolios.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEdit = (portfolio) => {
    setEditingId(portfolio._id);
    setEditedTitle(portfolio.title);
    setEditedImage(portfolio.image);
    setEditedLink(portfolio.link);
  };

  const handleSave = async (id) => {
    try {
      const response = await fetch(`https://dwsbackend-3.onrender.com/api/portfolio/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editedTitle, image: editedImage, link: editedLink }),
      });
      if (!response.ok) {
        throw new Error("Update failed");
      }
      setPortfolios(
        portfolios.map((item) =>
          item._id === id
            ? { ...item, title: editedTitle, image: editedImage, link: editedLink }
            : item
        )
      );
      setEditingId(null);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (loading) {
    return <div style={{ padding: "1rem" }}>Loading...</div>;
  }
  if (error) {
    return <div style={{ padding: "1rem" }}>Error: {error.message}</div>;
  }
  
  return (
    <div style={{ padding: "1rem", minHeight: "100vh" }}>
      {portfolios.length === 0 ? (
        <div style={{ textAlign: "center", color: "#555" }}>No portfolio items to manage.</div>
      ) : (
        portfolios.map((portfolio) => (
          <div
            key={portfolio._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fff",
              color: "#333"
            }}
          >
            {editingId === portfolio._id ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
                />
                <input
                  type="text"
                  value={editedImage}
                  onChange={(e) => setEditedImage(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
                />
                <input
                  type="text"
                  value={editedLink}
                  onChange={(e) => setEditedLink(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
                />
                <button onClick={() => handleSave(portfolio._id)} style={{ marginRight: "0.5rem" }}>
                  Save
                </button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <div>
                  <strong>Title:</strong> {portfolio.title}
                </div>
                <div>
                  <strong>Image:</strong>
                  <img 
                    src={portfolio.image} 
                    alt={portfolio.title} 
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      marginTop: "0.5rem",
                      borderRadius: "5px"
                    }}
                  />
                </div>
                <div>
                  <strong>Link:</strong>{" "}
                  <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                    {portfolio.link}
                  </a>
                </div>
                <div style={{ marginTop: "0.5rem" }}>
                  <button onClick={() => handleEdit(portfolio)} style={{ marginRight: "0.5rem" }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(portfolio._id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Manage_portfolio;
