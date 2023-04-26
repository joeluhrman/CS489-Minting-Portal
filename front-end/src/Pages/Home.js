import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar";
import React from "react";

function Home() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        <p>Home</p>
          <a>
            (current feed)
          </a>
        </header>
      </div>
    );
  }
  
  export default Home;