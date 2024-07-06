import Component from "./Component";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-container ${className}`}>
      <div className="do-you-want-to-learn-more-abou-wrapper">
        <h1 className="do-you-want-container">
          <span>{`Do you want to Learn more About cryptocurrencies `}</span>
          <span className="quickly-and-easily">quickly and easily ?</span>
        </h1>
      </div>
      <div className="bitcoin-parent">
        <img className="bitcoin-icon" alt="" src="/bitcoin.svg" />
        <Component
          prop="/@2x.png"
          lorenzo="Lorenzo"
          lorenzoo="@lorenzoo"
          amazingTelegramBotProvide="Amazing Telegram bot! Provides real-time crypto prices and news"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

// ADALINA
