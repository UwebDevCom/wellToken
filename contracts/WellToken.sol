// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
import "../node_modules/hardhat/console.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WellToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("WellToken", "WET") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
