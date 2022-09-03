import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header1() {
  const [showNavLeft, setShowNavLeft] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);
  const { cart } = useSelector((state) => state);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        {/* <MDBContainer fluid> */}
        <MDBContainer>
          {/* Left Side */}
          <MDBNavbarToggler
            type="button"
            data-target="#navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavLeft(!showNavLeft)}
          >
            {/* <MDBIcon icon='bars' fas /> */}
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavLeft}>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="/">Shop</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/mobile">Mobiles</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/laptop">Laptop</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          {/* </MDBContainer> */}

          {/* right side */}
          {/* <MDBContainer fluid> */}
          <MDBNavbarToggler
            type="button"
            data-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavRight(!showNavRight)}
          >
            {/* <MDBIcon icon='bars' fas /> */}
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">LOGIN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/register">REGISTER</MDBNavbarLink>
              </MDBNavbarItem>

              <Link to={"/cart"}>
                <div className="relative">
                  <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

                  {cart.length > 0 && (
                    <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-2 -right-2 rounded-full top- text-white">
                      {cart.length}
                    </div>
                  )}
                </div>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

{/* 
<MDBNavbarNav className="d-flex flex-row">
      <MDBNavbarItem className="me-3 me-lg-0">
        <MDBNavbarLink href="/cart">
            <MDBIcon fas icon="shopping-cart" />
        </MDBNavbarLink>
      </MDBNavbarItem>
    </MDBNavbarNav> 
*/}