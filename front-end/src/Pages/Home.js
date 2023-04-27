import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React, { useState } from "react";
import abi from "../utils/Social.json";
import {ethers} from "ethers";
let web3 = require('web3');



function Home() {
  const contractABI = abi.abi;
  const contractAddress = "0xb8905d195398FA271436a88aaa6C52f5E1a57883";
  const [posts, setPosts] = useState("");

  const retrieveRecents = async () => {
    try {
      const { ethereum } = window;
    
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const newContract = new ethers.Contract(contractAddress, contractABI, signer);
        
        await newContract.addUser("Kevin");
        let newPosts = await newContract.displayMessages();
        setPosts(newPosts);
        alert(newPosts[0]);


        if(posts.length == 0){
          alert("No messages minted");
        }
        else{
          alert("in else");
        }
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

    // function displayPost(e) {
    //     return (
    //       <div className="feedPost">
    //         <div> 
    //           {e.text} 
    //           <button>Like</button>
    //         </div>
    //       </div>
    //     );
    // }

    return (
      <div className="App">
        <Navbar />
        <header className="App-header gradient_bg">
        <p>Home</p>
        <button onClick={retrieveRecents}>Refresh</button>

        {/* <div>{posts}</div> */}
        
        {/* {posts.map(App => { return (
          <a>
              <button onClick={(e)=> displayPost(e)}> {App} </button>
          </a>
        )})} */}

        </header>
      </div>
    );
  }
  
  export default Home;