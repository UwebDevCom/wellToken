// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// import "../node_modules/hardhat/console.sol";
// import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract WellContract {
    address public owner;
    
    constructor() {
        owner = msg.sender; 
    }

    address constant WET_TOKEN_ADDRESS  = 0x2Fb19059f31a7d939470D55563ca9B19302606C5;

    event Transfer(address from, address receiver, uint amount, string message, uint timestemp, string keyword);
    event TransferSent(address _from, address _dest, uint _amount);
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestemp;
        string keyword;
    }

    TransferStruct[] transactions;

    function getCount() public view returns(uint) {
        uint transactionsLength = transactions.length;
        return transactionsLength;
    }

    function wellWishingPayment(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function sendWET(IERC20 token, address payable to, uint amount) public {
            // check the transaction successeed , then send WET 
            uint lastIndex = transactions.length-1;
            require(transactions[lastIndex].sender == msg.sender, 'Cant get your WET tokens, Please try again');
            token.transfer(to, amount);
            emit TransferSent(msg.sender, to, amount);
    }
}
