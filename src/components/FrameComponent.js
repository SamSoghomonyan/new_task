import Component from "./Component";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-div">
          <div className="parent">
            <div className="div3">
              <div className="div4">
                <b className="k">20k+</b>
                <div className="subscribers">subscribers</div>
              </div>
              <div className="div5">
                <b className="k1">19,5K</b>
                <div className="successful-cases">successful cases</div>
              </div>
              <div className="div6">
                <b className="b">4.8/5</b>
                <div className="rating">rating</div>
              </div>
            </div>
            <button className="button">
              <div className="join-whatsapp">Join Whatsapp</div>
            </button>
          </div>
          <div className="download-buttons">
            <div className="platform-buttons">
              <div className="platform-icons">
                <img
                  className="google-play-svgrepo-com-1-1"
                  loading="lazy"
                  alt=""
                  src="/googleplaysvgrepocom-1-1.svg"
                />
              </div>
              <img
                className="platform-buttons-child"
                loading="lazy"
                alt=""
                src="/frame-7@2x.png"
              />
            </div>
            <div className="platform-buttons1">
              <div className="app-store-svgrepo-com-1-wrapper">
                <img
                  className="app-store-svgrepo-com-1-icon"
                  loading="lazy"
                  alt=""
                  src="/appstoresvgrepocom-1.svg"
                />
              </div>
              <img
                className="platform-buttons-item"
                loading="lazy"
                alt=""
                src="/frame-8@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="wrapper">
          <Component
            prop="/-2@2x.png"
            lorenzo="Alexander"
            lorenzoo="@alex_x"
            amazingTelegramBotProvide="Superb cryptocurrency bot! Quick updates and reliable data"
            propWidth="290px"
            propFlex="unset"
          />
        </div>
        <Component
          prop="/-3@2x.png"
          lorenzo="Rushana"
          lorenzoo="@Hana"
          amazingTelegramBotProvide="Efficient and user-friendly bot. Simplifies crypto trading tasks"
          propWidth="290px"
          propFlex="unset"
        />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

// ADALINA
