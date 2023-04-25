import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React from "react";
import styled from "styled-components";

function Mint() {

    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        <p>Minting Page</p>
        
        <form>
        <label>
            Address:
            <input type="text" name="address" />
        </label>
        <h1></h1>
        <label>
            Message:
            <input type="text" name="message" />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </header>
      </div>
    );
  }
  
  export default Mint;