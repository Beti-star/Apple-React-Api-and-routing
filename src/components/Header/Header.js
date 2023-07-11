import React from "react";
import "./Header.css";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png"
import HeaderLinks from "./HeaderLinks";

function Header() {
  return (
    <>
{/* //     <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
//       <div className="container">
//         <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Brand href="/">
//             <img src={logo} alt="" />
//           </Navbar.Brand>

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="nav-justified w-100 nav-fill">
//               <Nav.Link className="nav-link" href="/mac">
//                 Mac
//               </Nav.Link>
//               <Nav.Link href="/iphone">iphone</Nav.Link>
//               <Nav.Link href="/ipad">ipad</Nav.Link>
//               <Nav.Link href="/watch">watch</Nav.Link>
//               <Nav.Link href="/tv">tv</Nav.Link>
//               <Nav.Link href="/music">Music</Nav.Link>
//               <Nav.Link href="/support">Support</Nav.Link>
//               <Nav.Link href="/search">
//                 <img src={search} alt="" />
//               </Nav.Link>
//               <Nav.Link href="/cart">
//                 <img src={cart} alt="" />
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     </div>
//   );
// } */}
<div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLinks link="/Mac" linkname="Mac" />
                <HeaderLinks link="/iphone" linkname="iphone" />
                <HeaderLinks link="/ipad" linkname="ipad" />
                <HeaderLinks link="/watch" linkname="watch" />
                <HeaderLinks link="/tv" linkname="tv" />
                <HeaderLinks link="/music" linkname="Music" />
                <HeaderLinks link="/support" linkname="Support" />

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    </>
  );
}


export default Header;
