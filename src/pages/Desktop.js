import FrameComponent from "../components/FrameComponent";
import Component from "../components/Component";
import FrameComponent1 from "../components/FrameComponent1";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <FrameComponent1 />
      <img className="question-icon" loading="lazy" alt="" src="/star-3.svg" />
      <section className="frame-parent">
        <FrameComponent />
        <h2 className="subscribe-to-our">
          Subscribe to our channel to learn more
        </h2>
      </section>
      <div className="frame-group">
        <div className="ethereum-parent">
          <img className="ethereum-icon" alt="" src="/ethereum@2x.png" />
          <img className="litecoin-icon" alt="" src="/litecoin.svg" />
        </div>
        <div className="Adalina">
          <Component
            prop="/-1@2x.png"
            lorenzo="Adalina"
            lorenzoo="@ada"
            amazingTelegramBotProvide="Must-have bot for crypto traders. Accurate signals and analysis"
            propWidth="unset"
            propFlex="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
