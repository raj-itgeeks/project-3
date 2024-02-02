import { Link } from "react-router-dom";

export default function GlobalSection(props) {
 
  return (
    <div className="main-div-global-section">
      <div style={{
        width:"90%",
        margin:"2% auto",
        display:"flex"
      }}>
      <div className="img-div-gloabal-section">
        <img
          className="img-global-section"
          src={props.products[9]?.images[0]?.src}
          alt="global-img"
        />

        <img
          className="img-global-section"
          src={props.products[19]?.images[0]?.src}
          alt="global-img"
        />
      </div>

      <div className="content-div-global-section">
        <div style={{
          fontFamily:"var(--main-family)",
          fontStyle:"normal",
          fontWeight:"400",
          fontSize:"14px",
          lineHeight:"24px"
        }}>
          <h3>SALE ENDING SOON</h3>

          <p>
            Save up to 60% off clearance and end of season items.
            <br />
            All sales final, must end soon!
          </p>

          <Link to="/collections/Romper" style={{
            textDecoration:"none",
            
          }}className="content-div-global-section-btn">SHOP SALE</Link>
        </div>
      </div>
      </div>
    </div>
  );
}
