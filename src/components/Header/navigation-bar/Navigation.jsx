import { useState } from "react";
import ShopNavigation from "./shop-navigation-page/ShopNavigation";
import CollectionNavigation from "./collection-navigation-page/CollectionNavigation";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Navigation(props) {
  const [showShop, updateShowShop] = useState(false);
  const [showCollection, updateShowCollection] = useState(false);

  const handleHovershop = (val) => {
    updateShowShop(val);
  };

  const handleHovercollection = (val) => {
    updateShowCollection(val);
  };

  return (
    <header
      style={{
        padding: "1.5% 3%",
      }}
    >
      <nav
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginLeft: "4%",
          }}
          className="logo"
        >
          <img
            src="https://mr-parker.myshopify.com/cdn/shop/files/mr_parker_logo.jpg?v=1624572312&width=600"
            className="logo-img"
            alt="logo"
          />
        </div>

        <div
          style={{
            marginLeft: "9%",
          }}
          className="nav-ul"
        >
          <ul style={{ letterSpacing: "0.05em" }} className="navigation-ul">
            <Link
              to="/"
              className="link shop-navigation-li"
              id="shop-nav"
              onMouseEnter={() => {
                updateShowShop(true);
              }}
            >
              Shop
              <RiArrowDropDownLine />
            </Link>
            <Link
              to="collections"
              className="link collection-navigation-li"
              id="collection-nav"
              onMouseEnter={() => {
                updateShowCollection(true);
              }}
            >
              Collections
            </Link>
            <Link to="blogs" className="link">
              Blog
            </Link>
            <Link to="contacts" className="link">
              Contacts
            </Link>
            <Link to="features" className="link">
              Features
            </Link>
            <Link to="faqs" className="link">
              FAQ
            </Link>
          </ul>
        </div>
      </nav>

      {showShop && <ShopNavigation showShop={handleHovershop} />}
      {showCollection && (
        <CollectionNavigation
          products={props.products}
          showCollection={handleHovercollection}
        />
      )}
    </header>
  );
}
