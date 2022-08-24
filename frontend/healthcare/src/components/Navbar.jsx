import React from "react";
import ConnectWallet from "./ConnectWallet";
function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" style={{borderRadius:"0.3rem"}}>
  <a className="navbar-brand" style={{marginLeft:"2rem"}} href="/">HealthRepo</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/display">Diplay</a>
      </li>
    </ul>
  </div>
  <div style={{float:"left", margin:"1rem"}}>
    <ConnectWallet /></div>
</nav>
    );
}
export default Navbar;