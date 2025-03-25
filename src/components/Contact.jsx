import React, { useEffect, useState } from "react";

const Contact = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    mobile_no: "", // added field
    subject: "",
    message: "",
  });
  const CurrentYear = new Date().getFullYear();
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("active");
      });

      input.addEventListener("focusout", () => {
        if (input.value === "") {
          input.parentElement.classList.remove("active");
        } else {
          input.parentElement.classList.add("active");
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("focusout", () => {});
      });
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dwsbackend-3.onrender.com/api/contact", { // replace with your API endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputState),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setInputState({ name: "", email: "", mobile_no: "", subject: "", message: "" });
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <>
      <style>
        {`
          ::selection {
            background:rgb(0, 0, 0);
            color: #000;
          }
        `}
      </style>
      {/* <!-- ====================================== Section Contact ===================================== --> */}
      <section className="contact-section" id="contact">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text">
            Get In Touch.
          </h2>
          <div className="line"></div>
        </div>
        <p className="services-product-text">
          TAKE A COFFEE & CHAT WITH ME
        </p>
        <div className="main-box-contact">
          <div className="contact-box-main">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M6 6H42C43.1046 6 44 6.89544 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89544 42 4 41.1046 4 40V8C4 6.89544 4.89544 6 6 6ZM24.1212 23.3658L11.2944 12.4754L8.70556 15.5246L24.1462 28.6342L39.3088 15.5123L36.6912 12.4877L24.1212 23.3658Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">EMAIL</p>
              <p className="contact-email">
                <a href="mailto:yourdesigner653@gmail.com">yourdesigner653@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-box-main">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M14 4H36C37.1046 4 38 4.89544 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V0H14V4ZM14 8V18H34V8H14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">PHONE</p>
              <p className="contact-email">
                <a href="tel:+919461323676">+91-9461323676</a>
              </p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <label htmlFor="name" className="form__label">
                NAME
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Your name"
                id="name"
                required
                autoComplete="off"
                value={inputState.name}
                onChange={handleChange}
                style={{ marginBottom: "1rem"}}
              />
            </div>
            <div className="form">
              <label htmlFor="email" className="form__label">
                EMAIL
              </label>
              <input
                type="email"
                className="form__input"
                placeholder="Your email"
                id="email"
                required
                autoComplete="off"
                value={inputState.email}
                onChange={handleChange}
                style={{ marginBottom: "1rem"}}
              />
            </div>
            <div className="form">
              <label htmlFor="mobile_no" className="form__label">
                MOBILE NUMBER
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Your mobile number"
                id="mobile_no" // updated id
                required
                autoComplete="off"
                value={inputState.mobile_no} // updated value binding
                onChange={handleChange}
                style={{ marginBottom: "0rem"}}
              />
            </div>
            <div className="form subject-input-main">
              <label htmlFor="subject" className="form__label">
                HOW CAN I HELP YOU ?
              </label>
              <select
                className="form__input"
                id="subject"
                required
                value={inputState.subject}
                onChange={handleChange}
                style={{ marginBottom: "0rem"}}
              >
                <option style={{color:"black"}} value="">Select</option>
                <option style={{color:"black"}} value="Web Designer">Web Designer</option>
                <option style={{color:"black"}} value="Logo Designer">Logo Designer</option>
                <option style={{color:"black"}} value="Video Editor">Video Editor</option>
                <option style={{color:"black"}} value="Graphic Designer">Graphic Designer</option>
              </select>
            </div>
            <div className="form">
              <label htmlFor="message" className="form__label">
                Your Project Brief
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Write your text..."
                id="message"
                required
                autoComplete="off"
                value={inputState.message}
                onChange={handleChange}
                style={{ marginBottom: "1rem"}}
              />
            </div>
            <div className="wrapper blog-btn">
              <button type="submit" className="btn-hover">Submit Now</button>
            </div>
          </form>
        </div>
        <div className="footer">
          © {CurrentYear} | All rights reserved by
          <span>
            <a href="/">Design With Shailesh</a>
          </span>
        </div>
      </section>
      {/* <!-- ====================================== Section Contact End ===================================== --> */}
    </>
  );
};
export default Contact;
