import { Link } from "react-router-dom";

export default function TextSlider() {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text-inner" role="marquee" >
        <div className="scrolling-text">
          <div className="scrolling-text-item">
            ♡<span> ENJOY FREE SHIPPING AND FREE RETURN ON ALL ORDERS </span>{" "}
          </div>
          <div className="scrolling-text-item">
            🏷
            <span>
              {" "}
              OUR NEW DROP IS HERE - <Link style={{
                color:"white"
              }} to="/collections/Romper">SHOP NOW</Link>{" "}
            </span>
          </div>
          <div className="scrolling-text-item">
            ♡<span> ENJOY FREE SHIPPING AND FREE RETURN ON ALL ORDERS </span>{" "}
          </div>
          <div className="scrolling-text-item">
            🏷
            <span>
              {" "}
              OUR NEW DROP IS HERE - <Link style={{
                color:"white"
              }} to="/collections/Dress">SHOP NOW</Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
