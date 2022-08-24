//import React from "react";
import { ethers } from "ethers";
//import { useState } from "react";




const retrive= async function (arr){
  
    alert("wait for metamask to confirm");
      try {
        const { ethereum } = window;
        if (ethereum) {
          const contractAddress=arr[0];
          const contractABI=arr[1];
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Healthrepo = new ethers.Contract(contractAddress,contractABI, signer);
  
          const returnVal = await Healthrepo.retriveData();
          console.log("Retrived -- ", returnVal);
          
          return (returnVal);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
  }
export default retrive