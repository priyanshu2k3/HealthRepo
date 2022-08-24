import React from "react";
import { useState ,useEffect} from "react";

function ConnectWallet() {

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        //console.log("d",accounts)
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        console.log(currentAccount);
      } else {
        alert("your account is not connected features may not work!!!")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connect_Wallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      alert("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

    return (
    <div>
      <button type="button" className="btn btn-primary" onClick={connect_Wallet}>Connect with wallet</button>
    </div>
    );
  }

export default ConnectWallet;