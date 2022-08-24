// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Healthrepo{
   address owner;
 constructor(){
    owner= msg.sender;
    console.log("contract deployed by",owner);
 }
string[] date;
string[] disease;
string[] prescription;
string[] medicine;



 function store(string memory _date,string memory _disease,string memory _prescription,string memory _medicine) public returns(string memory,string memory,string memory ,string memory ){
    date.push(_date);
    disease.push(_disease);
    prescription.push(_prescription);
    medicine.push(_medicine);
    return (_date,_disease, _prescription,_medicine);

 }

function retriveDate()public view returns(string[] memory){
    return date;
}

function retriveData()public view returns(string[] memory,string[] memory,string[] memory ,string[] memory ){
         require(msg.sender == owner,"you are not the owner cant give you the access");
         return(date,disease,prescription,medicine);

   } 
}