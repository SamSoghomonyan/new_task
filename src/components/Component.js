import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Component.css";

const Component = ({
  className = "",
  prop,
  lorenzo,
  lorenzoo,
  amazingTelegramBotProvide,
  propWidth,
  propFlex,
}) => {
  const divStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div className={`div ${className}`} style={divStyle}>
      <div className="div1">
        <img className="icon" loading="lazy" alt="" src={prop} />
        <div className="div2">
          <div className="lorenzo">{lorenzo}</div>
          <div className="lorenzoo">{lorenzoo}</div>
        </div>
      </div>
      <div className="amazing-telegram-bot">{amazingTelegramBotProvide}</div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  lorenzo: PropTypes.string,
  lorenzoo: PropTypes.string,
  amazingTelegramBotProvide: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Component;
