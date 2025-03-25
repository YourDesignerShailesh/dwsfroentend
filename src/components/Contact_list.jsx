import React, { useState, useEffect } from "react";

const Contact_list = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = () => {
      fetch("https://dwsbackend-3.onrender.com/api/contact")
        .then((res) => res.json())
        .then((data) => {
          setContact(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    fetchContacts();
    const interval = setInterval(fetchContacts, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0", color: "black" }}>
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0", color: "black" }}>
        Error fetching contact details
      </div>
    );
  }
  if (!contact || contact.length === 0) {
    return (
      <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0", color: "black" }}>
        No contact data available.
      </div>
    );
  }

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", color: "black", borderRadius:"20px" }}>
      {/* Updated container using flex */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "1rem", 
        width: "100%" 
      }}>
        {contact.slice().reverse().map((item, index) => (
          <div 
            key={index} 
            style={{ 
              padding: "1rem", 
              border: "1px solid #ccc", 
              borderRadius: "10px", 
              background: "#ffffff",
              width: "100%" // each box takes full width
            }}
          >
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
            <div>Mobile No: {item.mobile_no}</div>
            <div>Subject: {item.subject}</div>
            <div>Message: {item.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact_list;
