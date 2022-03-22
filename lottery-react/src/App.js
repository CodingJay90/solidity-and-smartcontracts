import { useEffect, useState } from "react";
import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
import Modal from "./components/Modal";
import { Spinner } from "./components/Spinner";
import Highlighter from "./components/Test";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({ value: 0 });
  const [message, setMessage] = useState("");
  useEffect(() => {
    const init = async () => {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      setManager(manager);
      setPlayers(players);
      setBalance(balance);
      setLoading(false);
    };
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    setMessage("Waiting on trasction success");

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(values.value, "ether"),
    });
    setMessage("You have been entered");
  };

  const handlePickWinner = async () => {
    const accounts = await web3.eth.getAccounts();
    setMessage("Waiting on trasction success");
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    setMessage("A winner has been picked");
  };

  return (
    <Highlighter />
    // <div className="App">
    //   <h2>Lottery Contract</h2>
    //   {loading ? (
    //     <Spinner />
    //   ) : (
    //     <>
    //       <p>This contract is managed by {manager}</p>
    //       <p>
    //         There are currently {players.length} people entered, competing to
    //         win {web3.utils.fromWei(balance, "ether")} ether!
    //       </p>
    //     </>
    //   )}

    //   <hr />

    //   <div>
    //     <h4>Want to try your luck?</h4>
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         <label htmlFor="">Amount of either to enter</label>
    //         <input
    //           type="number"
    //           onChange={(e) => setValues({ ...values, value: e.target.value })}
    //           value={values.value}
    //         />
    //       </div>
    //       <button>Enter</button>
    //     </form>
    //   </div>
    //   <hr />
    //   <h4>Ready to pick a winner</h4>
    //   <button onClick={handlePickWinner}>Pick a winner</button>
    //   <hr />
    //   <h1>{message}</h1>
    // </div>
  );
}

export default App;
