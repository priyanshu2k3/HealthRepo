import { ethers } from "ethers";

const submission= async function(arr) {
  alert("wait for metamask to confirm");
  console.log(arr);
//async function submission(props)  {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const contractAddress=arr[4];
        const contractABI=arr[5];
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const Healthrepo = new ethers.Contract(contractAddress,contractABI, signer);

        const returnVal = await Healthrepo.store(arr[0],arr[1],arr[2],arr[3]);
        // let returnVal = await Healthrepo.store(props.date,props.desiese,props.prescription,props.medicine);
        console.log("Storing......", returnVal.hash);
        await returnVal.wait();
        console.log("Stored -- ", returnVal);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
}
  export default submission;