require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    
    hardhat: {
      // See its defaults
    },
    
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/KJH55GayDCAOzD1F28WOAM5Ad6WL01wa',
      accounts: ['807d47a22ff4e305da1102c8e536cb39f2865ad2ade30c58a4c042fc913ca310']
    }, 
    ganache: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: ['0x4b264af78f32762daa3e7a531d3d7259b02d662392b4504c79b3def0ebf563fb']
    }, 
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/JXZALNZXpQuX18HCWeGsWDM999i-HKwA',
      accounts: ['807d47a22ff4e305da1102c8e536cb39f2865ad2ade30c58a4c042fc913ca310'],
    },
  }
};
