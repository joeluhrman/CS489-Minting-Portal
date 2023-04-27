import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React from "react";
import abi from "../utils/Social.json";
import {ethers} from "ethers";
let web3 = require('web3');

const posts = [];

function Home() {
  const contractABI = abi.abi;
  //const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const retrieveRecents = async () => {
    try {
      const { ethereum } = window;
    
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        //const newContract = new ethers.Contract(contractAddress, contractABI, signer);
        alert("testing in home");
        //posts = newContract.displayMessages();
        //console.log(posts);
        //figure out how to recieve the post info and then display it below
      } 
      else {
        console.log("error");
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

    function displayPost(e) {
        return (
          <div className="feedPost">
            <div> 
              {e.text} 
              <button>Like</button>
            </div>
          </div>
        );
    }

    return (
      <div className="App">
        <Navbar />
        <header className="App-header gradient_bg">
        <p>Home</p>
        <button onClick={retrieveRecents}>Refresh</button>

        {posts.map(App => { return (
          <a>
              <button onClick={(e)=> displayPost(e)}> {App} </button>
          </a>
        )})}

        </header>
      </div>
    );
  }
  
  export default Home;