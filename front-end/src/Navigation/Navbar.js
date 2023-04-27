import React, { useState } from "react"
import { Container } from "react-bootstrap"

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('');

  return (
    <div className="navbar navbar-expand-lg navbar-light gradient_bg">
      <Container fluid>
        <a className="navbar-brand" href="#">
          Desocialized: NFT Minting Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
              <button onClick={() => setCurrentPage('/home')}> Home</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mint">
              <button onClick={() => setCurrentPage('/mint')}> Mint</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/searchpage">
              <button onClick={() => setCurrentPage('/searchpage')}> Search</button>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;