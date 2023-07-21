// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
  
  
  //  888888888888  TOKEN CONTRACT  888888888888888
  // const initialSupply = 1000000;
  // const wellToken  = await hre.ethers.deployContract("WellToken", [initialSupply]);
  // await wellToken.waitForDeployment();
  // const totalSupply = await wellToken.totalSupply();
  // console.log(
  //   `WellToken deployed to ${await wellToken.getAddress()} with an initialSupply ${totalSupply}`
  // );



//  888888888888  WEB3 CONTRACT  888888888888888
  const wellContract  = await hre.ethers.deployContract("WellContract");
  await wellContract.waitForDeployment();
  console.log( `WellToken deployed to ${await wellContract.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});