import React, { useState } from "react";
import Contact_list from "../components/Contact_list";
import Add_portfolio from "../components/Add_portfolio";
import Manage_portfolio from "../components/Manage_portfolio";

const Admin = () => {
  const [userId, setUserId] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showSecret, setShowSecret] = useState(false); // flag set on valid submit
  const [activeComponent, setActiveComponent] = useState(null); // "first", "second", "third", or null

  const handleUserChange = (e) => {
    setUserId(e.target.value);
  };

  const handleChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "yourdesignershailesh" && passwordInput === "yourdesignershailesh@*^(^(^!(!!") {
      setShowSecret(true);
      setActiveComponent(null); // reset active component
    } else {
      setShowSecret(false);
      setActiveComponent(null);
    }
  };

  return (
    <div style={{ padding: "2rem", height: "100vh", overflowY: "auto" }}>
      <h1>Admin Page</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label htmlFor="userId" style={{ color: "white", marginBottom: "0.2rem" }}>User ID</label>
        <input 
          id="userId" 
          name="userId" 
          type="text" 
          value={userId} 
          onChange={handleUserChange} 
          placeholder="Enter user id" 
          style={{
            padding: "0.5rem",
            border: "2px solid #28a745",
            borderRadius: "4px",
            width: "100%",
            maxWidth: "300px",
            margin: "0.5rem 0",
            color: "black"
          }} 
        />
        <label htmlFor="password" style={{ color: "white", marginBottom: "0.2rem" }}>Password</label>
        <input 
          id="password" 
          name="abc" 
          type="password" 
          value={passwordInput} 
          onChange={handleChange} 
          placeholder="Enter password" 
          style={{
            padding: "0.5rem",
            border: "2px solid #007BFF",
            borderRadius: "4px",
            width: "100%",
            maxWidth: "300px",
            margin: "0.5rem 0",
            color: "black"
          }} 
        />
        <button onClick={handleSubmit} style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
          Submit
        </button>
      </div>
      {showSecret && (
        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => setActiveComponent("first")} style={{ padding: "0.5rem 1rem" }}>
            Contact List
          </button>
          <button onClick={() => setActiveComponent("second")} style={{ padding: "0.5rem 1rem" }}>
            Manage Portfolio
          </button>
          <button onClick={() => setActiveComponent("third")} style={{ padding: "0.5rem 1rem" }}>
            Add Portfolio
          </button>
        </div>
      )}
      {activeComponent === "first" && <Contact_list />}
      {activeComponent === "second" && <Manage_portfolio />}
      {activeComponent === "third" && <Add_portfolio />}
    </div>
  );
};

export default Admin;
