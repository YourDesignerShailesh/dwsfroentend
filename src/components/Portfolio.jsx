import React, { useState, useEffect } from "react";

const Portfolio = () => {
  // state for images
  const [images, setImages] = useState([]);
  // added state to track hovered image index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // function to fetch images
    const fetchImages = () => {
      fetch("https://dwsbackend-3.onrender.com/api/portfolio")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setImages(data);
          } else {
            console.error("Fetched data is not an array");
            setImages([]);
          }
        })
        .catch((err) => {
          console.error(err);
          setImages([]); // fallback to empty array on error
        });
    };

    // initial fetch
    fetchImages();

    // fetch new images every 10 seconds
    const intervalId = setInterval(fetchImages, 10000); // corrected interval to 10 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="portfolio-section" id="portfolio" style={{ marginBottom: "50px" }}>
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up" style={{ opacity: 1 }}>
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        {/* Masonry gallery container */}
        <div className="masonry-gallery" style={{ columnCount: 4, columnGap: "1em" }}>
          {images.slice().reverse().map((img, index) => (
            <div
              key={index}
              style={{ marginBottom: "1em", breakInside: "avoid", position: "relative" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.image} // changed from img.url since backend uses "image"
                alt={img.title || `Image ${index + 1}`} // using img.title for alt text
                title={img.title} // added title attribute for hover effect
                style={{ width: "100%", display: "block" }}
                onError={(e) => { e.target.onerror = null; e.target.src='/path/to/fallback.png'; }}
              />
              <button
                onClick={() => window.open(img.link, '_blank')}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: hoveredIndex === index ? "rgba(0, 0, 0, 0.7)" : "transparent",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  cursor: "pointer"
                }}
              >
                View On Behance
              </button>
              <h2 style={{
                color: "#ffffff",
                fontFamily: "DM Sans", // corrected to camelCase
                fontSize: "18px", // corrected to camelCase
                textTransform: "uppercase",
                lineHeight: "30px"
              }}>
                {img.title}
              </h2>
            </div>
          ))}
          {images.length === 0 && <p>Loading images...</p>}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
