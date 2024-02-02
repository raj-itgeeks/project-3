import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

import ReactCountryFlagsCurrencySelect from "react-country-flag-currency-picker";
import { Link } from "react-router-dom";
export default function UpperHeader(props) {
  const [country, setCountry] = useState("");
  return (
    <header
      style={{
        width: "100%",
        padding: "0% 5%",
        backgroundColor: "var(--announcement-background)",
      }}
    >
      <section
        style={{
          width: "100%",
          padding: "1.7% 1%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ul
            style={{
              display: "flex",
              color: "white",
            }}
          >
            <li
              style={{
                margin: "0% 5%",
              }}
            >
              <FaFacebookF />
            </li>
            <li
              style={{
                margin: "0% 5%",
              }}
            >
              <FaInstagram />
            </li>
            <li
              style={{
                margin: "0% 5%",
              }}
            >
              <FaPinterest />
            </li>
            <li
              style={{
                margin: "0% 5%",
              }}
            >
              <FaYoutube />
            </li>
          </ul>

          <ul
            style={{
              display: "flex",
              justifyContent: "end",
              color: "white",
            }}
          >
            <li>
              <Link style={{color:"white"}} to="/account/login">
              <CgProfile />
              </Link>
            </li>
            <li
              style={{
                width: "29%",
              }}
            >
              <ReactCountryFlagsCurrencySelect
                defaultCountry="US"
                searchable={false}
                country={country}
                onSelect={(country) => setCountry(country)}
              ></ReactCountryFlagsCurrencySelect>
            </li>

            <li>
              <button onClick={props.handle} className="cart-button">
                <SlHandbag />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}
