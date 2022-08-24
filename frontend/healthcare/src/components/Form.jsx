import abi from"../utils/Healthrepo.json";
import submission from "./Submission";
import React from "react";
import { useState } from "react";

const contractAddress = "0xb51c962fcb0192efa60a33321340da84ba291be0";
const contractABI = abi.abi;

function Form() {

    const [date,setDate] = useState("");
    const [pres,setPres] = useState("");
    const [disease,setDisease] = useState("");
    const [med,setMed] = useState("");
  
    async function submit(){
      var arr=[date,disease,pres,med,contractAddress,contractABI];
      await submission(arr); 
  
      //console.log(date,disease,pres,med);
      // return(date,pres,disease,med);
    }
      return (
      <div className='continer fluid ' style={{margin:"1rem"}}>
  <form>
    <div className="form-group">
      <label  >When disease happened</label>
      <input type="date" className="form-control" onChange={(e)=>{setDate(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label  >Which disease </label>
      <input type="text" className="form-control" placeholder="fever ,corona"  onChange={(e)=>setDisease(e.target.value)}/>
    </div>
    <div className="form-group">
      <label  >Doctors prescriptions</label>
      <input type="text" className="form-control" placeholder="diet+ diagnosis suggested" onChange={(e)=>{setPres(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label  >Medecine to be taken</label>
      <input type="text" className="form-control" placeholder="vicks paracetamol" onChange={(e)=>{setMed(e.target.value)}}/>
    </div>
    <button style={{margin:"0.2rem"}} type="button" className="btn btn-primary" onClick={submit}>Submit</button>
    
  </form><hr/></div>
      );
    }
export default Form;