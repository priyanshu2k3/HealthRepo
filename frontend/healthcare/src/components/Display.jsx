import React from "react";

function Display(prop) {
     console.log(prop.props)
     var i=prop.val;
     console.log(prop.val);
     const date=prop.props[0];
     const disease=prop.props[1];
     const prescrp=prop.props[2];
     const medicine=prop.props[3];

    console.log(date ,disease,prescrp,medicine,"here")

  if(date!==undefined){
      return(<>
    {date.map(element =>
 <div key={i++} className="card" >
 <div className="card-body">
  <h5 className="card-title">Date:{element}</h5>
  <p className="card-text">Disease:{disease[i]}</p>
  <p className="card-text">Prescription:{prescrp[i]}</p>
  <p className="card-text">Medicine{medicine[i]}</p>
</div>
</div>)}</>
)}
else {return(<h1>Nothing to display</h1>);}
         }
export  default  Display;

