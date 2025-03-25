import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about" style={{ paddingBottom: "0" }}>
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          I am a certified professional Web Designer, Video Editor, Logo
          Designer and Graphic expert in alwar and have over 9 years of
          expertise with more than 20+ websites designed, 500+ video edited and
          more than 800+ graphics designed. I am also passionate about Digital
          Marketing Projects (SMM, Facebook, Instagram, Email).
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Shailesh Saini</p>
        </div>

        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:+91-9461323676'"
          >
            (+91)9461323676
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            // decreased padding to remove extra space below the email
            onClick="location.href='mailto:yourdesigner653@gmail.com'"
          >
            yourdesigner653@gmail.com
          </p>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
