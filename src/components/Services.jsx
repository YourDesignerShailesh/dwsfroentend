import React, { useState } from "react";
import UiUxSvg from "../assets/images/svg/ui-ux.svg";
import DownArrow from "../assets/images/svg/down-arrow.svg";
import VisualBranding from "../assets/images/svg/visual-branding.svg";
import WebDevelopement from "../assets/images/svg/web-development.svg";
import AppDevelopement from "../assets/images/svg/app-development.svg";
import GalleryImg2 from "../assets/images/gallery/gallery-img2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  return (
    <>
      {/* <!-- ====================================== Section Services ===================================== --> */}
      <section className="Services-section" id="services">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Services.
          </h2>
          <div className="line"></div>
        </div>
        <h3 className="services-product-text fade_up">
          BUILDING DIGITAL PRODUCT WITH BETTER EXPERIENCE
        </h3>
        <p className="visoion-text fade_up">
          Our vision is to be a trailblazing force in the world of web design
          and development, recognized for our unwavering commitment to
          excellence, integrity, and customer satisfaction.
        </p>
        <div className="row services-row">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#" onClick={(e) => { e.preventDefault(); setPopupOpen(true); }}>
              <div className="services-img">
                <img src={UiUxSvg} alt="ui-ux" />
              </div>
              <p className="services-text">Web Designer</p>
              <p className="molestie">
                Professional web design services provides with creative, and
                functional websites to showcase their products or services
                online.. Choose Design With Shailesh, the best web designing
                company in alwar,
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#" onClick={(e) => { e.preventDefault(); setPopupOpen(true); }}>
              <div className="services-img services-img2">
                <img src={VisualBranding} alt="visual-branding" />
              </div>
              <p className="services-text services-text2">Video Editor</p>
              <p className="molestie">
                Professional video editing, provides High-quality edits, fast
                turnaround, and competitive pricing. Transform your raw footage
                into a polished final product. Choose design With shailesh, the
                best video editor in alwar
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#" onClick={(e) => { e.preventDefault(); setPopupOpen(true); }}>
              <div className="services-img services-img3">
                <img src={WebDevelopement} alt="web-development" />
              </div>
              <p className="services-text services-text3">Grapics designer</p>
              <p className="molestie">
                We provide professional graphic design services that communicate
                your brand's message, including brochures, and social media
                graphics. Choose Design With Shailesh, the best graphic design
                company in alwar
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#" onClick={(e) => { e.preventDefault(); setPopupOpen(true); }}>
              <div className="services-img services-img4">
                <img src={AppDevelopement} alt="app-development" />
              </div>
              <p className="services-text services-text4">Logo Designer</p>
              <p className="molestie">
                Professional logo design services that create unique visual
                identities for businesses of all sizes, conveying their values
                in a creative and effective way. Choose Design With Shailesh,
                the best logo design company in alwar
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Services End ===================================== --> */}
      {/* Render popup only if open */}
      {isPopupOpen && (
      <div id="services-popup" className="popup-container">
        <div className="popup-content popup-content2">
          <Link to="#" onClick={(e) => { e.preventDefault(); setPopupOpen(false); }} className="close">
            &times;
          </Link>
          <h2 className="simple-steps">UI/UX DESIGN</h2>
          <img
            className="blog-popup-img1"
            src={GalleryImg2}
            alt="gallery-img8"
          />
          <p className="blog-sit-text">
            Just because we cant get out and about like we normally would,
            doesn’t mean we have to taking pictures. There’s still plenty you
            can do, provided you are prepared to use some imagination. Here are
            a few ideas to keep you shooting until normal life resumes.
          </p>
          <p className="blog-sit-text">
            Most photographers love to shoot the unusual, and you don’t get much
            more unusual than These Unprecedented Times. Right now everything
            counts as out of the ordinary. There are a number of remarkable
            things about these lockdown days that are worth photographing now we
            can remember them when it is all over.
          </p>
          <p className="blog-sit-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum consequuntur quo
            obcaecati rerum sit non.
          </p>
          <h2 className="simple-steps services-popup-text">What Is Ui/Ux?</h2>
          <p className="blog-sit-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum consequuntur quo
            obcaecati rerum sit non.
          </p>
          <p className="blog-sit-text">
            treets empty that are usually busy are remarkable and can evoke the
            sense of historical pictures from before the invention of the
            motorcar. Other things that are different at the moment will be
            queues to get into stores and the lines marked out on the floor to
            show how far apart we should be.
          </p>
        </div>
      </div>
      )}
      {/* <!-- ====================================== Services PopUp End ===================================== --> */}
    </>
  );
};
export default Services;
