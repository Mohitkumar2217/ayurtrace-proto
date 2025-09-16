import "@nomicfoundation/hardhat-ethers";

export default {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      type: "edr-simulated"   // local in-memory blockchain
    },
    localhost: {
      type: "http",           // connects to npx hardhat node
      url: "http://127.0.0.1:8545"
    }
  }
};
