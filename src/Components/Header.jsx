import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="haeder">
        {/*image logo*/}
        <div>
          <img
            style={{ width: 120, height: 40, marginTop: 10 }}
            className="image"
            src="https://links.papareact.com/f90"
          />
        </div>
        {/* Search Bar */}
        <div className="headerInputContainer">
          <input
            className="headerInput"
            type="text"
            placeholder="search Items or products"
          />
          <SearchOutlinedIcon
            style={{ color: "white", marginLeft: 4, marginTop: 2 }}
          />
        </div>

        <div>
          <h4 className="headerText">Hello Collins</h4>
          <h4 className="headerText">Accounts & Lists</h4>
        </div>

        <div>
          <h4 className="headerText">Returns</h4>
          <h4 className="headerText">& Orders</h4>
        </div>

        <div style={{ position: "relative", cursor: "pointer" }}>
          <ShoppingCartOutlinedIcon style={{ color: "white" }} />
          <span
            style={{
              position: "absolute",
              left: 14,
              right: 14,
              backgroundColor: "white",
              width: 14,
              height: 14,
              borderRadius: 7,
              textAlign: "center",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            {cart.length}
          </span>
        </div>

        {/* place and number */}
        <div>
          <h4 className="headerText">Nigeria</h4>
          <h4 className="headerText">34784123499</h4>
        </div>
      </div>

      {/* Bottom header part */}
      <div className="headerBottom">
        <MenuOutlinedIcon style={{ color: "white", paddingTop: 1 }} />
        <p className="headerBottomText">Buy</p>
        <p className="headerBottomText">Healthy Products</p>
        <p className="headerBottomText">Sell</p>
        <p className="headerBottomText">Baby</p>
        <p className="headerBottomText">Health & LifeStyle</p>
        <p className="headerBottomText">Prime Video</p>
        <p className="headerBottomText">Super Sale</p>
        <p className="headerBottomText">Offers</p>
        <p className="headerBottomText">Exciting Offers</p>
        <p className="headerBottomText">Subscribe</p>
      </div>
    </>
  );
}

export default Header;
