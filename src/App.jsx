import React from "react";
import { ethers } from "ethers";
import Texto from "./Texto";

function App() {
  if ("ethereum" in window) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    async function getWallet() {
      const wallet = await signer.getAddress();
      console.log(wallet);
    }

    getWallet();
  } else {
    alert("Instala metamask");
  }

  return (
    <div className="App">
      <Texto></Texto>
    </div>
  );
}

export default App;
