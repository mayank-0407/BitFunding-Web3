require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "#",
      accounts: ["#"],
    },
    goerli: {
      url: "#",
      accounts: ["#"],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
      ],
    },
  },
};
