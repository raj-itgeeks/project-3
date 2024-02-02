import { Link } from "react-router-dom";

export default function ShopNavigation(props) {
  return (
    <div
      className="shop-navigation-main-div"
      onMouseLeave={() => {
        props.showShop(false);
      }}
    >
      <ul className="main-ul">
        <ul className="sub-ul">
          <Link className="link " to="collections">
            <strong className="list-heading">Shop by type</strong>
          </Link>
          <Link className="link shop-li" to="collections/Rompers">
            All products
          </Link>
          <Link className="link shop-li" to="collections/Dress">
            Dresses
          </Link>
          <Link className="link shop-li" to="collections/Romper">
            Rompers
          </Link>
          <Link className="link shop-li" to="collections/Top">
            Tops
          </Link>
        </ul>
        <ul className="sub-ul">
          <Link className="link" to="collections/Romper">
            <strong className="list-heading">Shop by Collection</strong>
          </Link>
          <Link className="link shop-li" to="collections/Romper">
            All Collection
          </Link>
          <Link className="link shop-li" to="collections/Romper">
            New Arrivals
          </Link>
          <Link className="link shop-li" to="collections/Romper">
            Staff Favorities
          </Link>
          <Link className="link shop-li" to="collections/Romper">
            Best Selling
          </Link>
        </ul>
        <ul className="sub-ul">
          <Link className="link" to="pages/about-us">
            <strong className="list-heading">Store info</strong>
          </Link>
          <Link className="link shop-li" to="pages/about-us">
            About us
          </Link>
          <Link className="link shop-li" to="/contacts">
            Contact us
          </Link>
          <Link className="link shop-li" to="/features">
            Theme features
          </Link>
        </ul>
      </ul>
    </div>
  );
}
