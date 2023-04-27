import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import abi from "../utils/Social.json";
import {ethers} from "ethers";
let web3 = require('web3');


function Mint() {
  const [inputMessage, setInputMessage] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const contractABI = abi.abi;
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const change = event => {
    setInputMessage(event.target.value);
    console.log(event.target.value);
  }

  // Allows to connect an auth'd wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Could not connect to wallet");
        return;
      }

      // Makes request to connect to ETH account (Metamask wallet)
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);

      // Set the currAccount state within this component to know the address of the account
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("No ETH wallet detected");
        return;
      } else {
        console.log("ETH detected", ethereum);
      }

      // Pulls array of accounts
      const accounts = await ethereum.request({ method: "eth_accounts" });


      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])


  const addMessage = async () => {
    try {
      const { ethereum } = window;
  
      // cant actually call the functions until we deploy the contract
      if(ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Contract = new ethers.Contract(contractAddress, contractABI, signer);
          Contract.addMessage(inputMessage); 
          console.log(inputMessage);
      } 
      else {
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
        <p>Minting Page</p>
        
        {!currentAccount && (<button onClick={connectWallet}>Connect Wallet!</button>)}
        <h1></h1>
        <label>
            Message:
            <input type="text" name="message" onChange={change}/>
        </label>
        <button onClick={addMessage}>Submit</button>
        </header>
      </div>
    );
  }
  
  export default Mint;