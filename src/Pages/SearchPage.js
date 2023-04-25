import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React from "react";
import styled from "styled-components";

function SearchPage() {
    const Button = styled.button`
        background-color: white;
        color: black;
        padding: 3px 10px;
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
    `;
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        <p>Search Page</p>
        <p>Enter a wallet address and search for that user's posts!</p>
        <form>
        <label>
            Address:
            <input type="text" name="address" />
        </label>
        <h1></h1>
        <input type="submit" value="Submit" />
        </form>
        </header>
      </div>
    );
  }
  
  export default SearchPage;