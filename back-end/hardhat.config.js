require("@nomicfoundation/hardhat-toolbox");
require(('dotenv/config'));

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: proccess.env.URL,
      accounts: [process.env.ACCOUNT]
    },
  },
};
