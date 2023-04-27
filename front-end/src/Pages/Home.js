import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React, { useState } from "react";
import abi from "../utils/Social.json";
import { ethers } from "ethers";
let web3 = require('web3');

function Home() {
  const contractABI = abi.abi;
  const contractAddress = "0xb8905d195398FA271436a88aaa6C52f5E1a57883";
  const [newPosts, setNewPosts] = useState("");

  const retrieveRecents = async () => {
    try {
      const { ethereum } = window;
    
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        let messageA = await Contract.findMessagesByAddress("0xb0af2c6a41e7ccbb78a491744cd1d87267f37148");
        let messageU = await Contract.findMessages("Kevin");
        let posts = "";
        for(let x = 0; x < messageA.length; x++) {
          posts += "user: " + messageA[x].id + "\nmessage: " + messageA[x].text + "\n";
        }

        for(let y = 0; y < messageU.length; y++) {
          posts += messageU[y].text + "\n";
        }
        setNewPosts(posts);

        if(posts.length === 0){
          alert("No messages minted");
        }
      } 
      else {
        console.log("error");
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header gradient_bg">
        <p>Home</p>
        <button onClick={retrieveRecents}>Refresh</button>
        <div className="new-posts">{newPosts}</div>
      </header>
    </div>
  );
}

export default Home;
