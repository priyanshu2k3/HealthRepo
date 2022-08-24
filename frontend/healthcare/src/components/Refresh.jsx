import React from "react";
import retrive from "./Retrive";
import abi from"../utils/Healthrepo.json";
import { useState } from "react";
import Display from "./Display";

const contractAddress = "0xb51c962fcb0192efa60a33321340da84ba291be0";
const contractABI = abi.abi;

function Refresh(){
    const   [Displaysend,setDisplaysend] = useState([]);

    async function refresh(){
        var arr=[contractAddress,contractABI];
        const returnVal=await retrive(arr);
        console.log("refresh-app.js",returnVal);
        setDisplaysend(returnVal);}

    return(
    <div>
    <div className="d-flex justify-content-start">
    <button style={{margin:"0.2rem"}} type="button" className="btn btn-primary" onClick={refresh}>Refresh</button></div>
      {Displaysend!==[]?<Display props={Displaysend} val={-1}/>:<h1>Nothing to display</h1>}
      </div>

    );
}
export default Refresh;