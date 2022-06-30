import React from "react";
import { ethers } from "ethers";
import Texto from "./Texto";

function App() {
  function getAddress() {
    if ("ethereum" in window) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      async function getWallet() {
        await provider.send("eth_requestAccounts", []);

        const signer = provider.getSigner();
        const wallet = await signer.getAddress();

        const texto = document.getElementById("boton");
        texto.innerText = wallet;
      }

      getWallet();
    } else {
      alert("Instala metamask");
    }
  }

  return (
    <div className="App">
      <button id="boton" className="btn" onClick={getAddress}>
        CONNECT WALLET
      </button>
    </div>
  );
}

export default App;
