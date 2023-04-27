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
    const contractAddress = "0xb8905d195398FA271436a88aaa6C52f5E1a57883";

    const change = event => {
      setInputAddress(event.target.value);
      console.log(event.target.value);
    }

    const findMessageByUsername = async () => {
      console.log("in func");
      try {
        const { ethereum } = window;
    
        // cant actually call the functions until we deploy the contract, i'm not sure if findMessage function will work because it returns a stuct from solidity
        if(ethereum) {
          let message;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Contract = new ethers.Contract(contractAddress, contractABI, signer);
          message = await Contract.findMessages(inputAddress);
          console.log(message);
          alert(message[0].text);

        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    }

    const findMessageByAddress = async () => {
      console.log("in func");
      try {
        const { ethereum } = window;
    
        // cant actually call the functions until we deploy the contract, i'm not sure if findMessage function will work because it returns a stuct from solidity
        if(ethereum) {
          let message;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Contract = new ethers.Contract(contractAddress, contractABI, signer);
          message = await Contract.findMessagesByAddress(inputAddress);
          console.log(message);
          alert(message[0].text);

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
        <label>
            Addr:
            <input type="text" name="address" onChange={change}/>
        </label>
        <button onClick={findMessageByAddress}>Search by Address</button>
        <button onClick={findMessageByUsername}>Search by Username</button>
        </header>
      </div>
    );
  }
  
  export default SearchPage;