const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "remember swift soldier code blanket verify top item genre fade fitness question",
  "https://rinkeby.infura.io/v3/d8e420b4670e407aa56d9ca8473e09ab"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("deploying", accounts);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });
  console.log("result", result.options.address);
  provider.engine.stop();
};

deploy();
