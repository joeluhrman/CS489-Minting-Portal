import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import abi from "../utils/Social.json";
import {ethers} from "ethers";
let web3 = require('web3');

function SearchPage() {
    const Button = styled.button`
        background-color: white;
        color: black;
        padding: 3px 10px;
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
    `;

    const [inputAddress, setInputAddress] = useState("");
    const contractABI = abi.abi;

    const change = event => {
      setInputAddress(event.target.value);
      console.log(event.target.value);
    }

    const findMessage = async () => {
      try {
        const { ethereum } = window;
    
        // cant actually call the functions until we deploy the contract, i'm not sure if findMessage function will work because it returns a stuct from solidity
        if(ethereum) {
          let message;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          //const Contract = new ethers.Contract(contractAddress, contractABI, signer);
          //message = await Contract.findMessage(inputAddress);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }

    }

    return (
      <div className="App">
        <Navbar />
        <header className="App-header gradient_bg">
        <p>Search Page</p>
        <p>Enter a wallet address and search for that user's posts!</p>
        <form>
        <label>
            Address:
            <input type="text" name="address" onChange={change}/>
        </label>
        <h1></h1>
        <button onClick={findMessage}>Search</button>
        </form>
        </header>
      </div>
    );
  }
  
  export default SearchPage;