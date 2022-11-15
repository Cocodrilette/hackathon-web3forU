import { useState, useEffect } from "react";
import { ethers } from "ethers";

import { Address } from "../../contracts/Main-contract-address.json";
import Contract from "../../contracts/Main.json";
import styles from "./Deposit.module.css";
import useAppContext from "../../context/AppContext";
import { AppContextInterface } from "../../context/AppContextTypes";

const Deposit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [amount, setAmount] = useState(0);
  const { isLogin } = useAppContext() as AppContextInterface;

  const handleSubmit = async (event: any) => {
    return;
  };

  const Button = () => {
    if (isLoading) {
      return (
        <button
          className="bg-gray-900 text-white py-2 rounded-md shadow-md font-bold"
          disabled={true}
        >
          Loading...
        </button>
      );
    }

    if (isError) {
      return (
        <button
          className="bg-red-300 text-black py-2 rounded-md shadow-md font-bold"
          onClick={handleSubmit}
        >
          Error creating task. Try again.
        </button>
      );
    }

    return (
      <button
        className="bg-gray-900 text-white py-2 rounded-md shadow-md font-bold"
        onClick={handleSubmit}
      >
        Create Task
      </button>
    );
  };

  const randomAmount = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setAmount(randomAmount());
      }, 1000);
    }
  }, []);

  return (
    <div
      id={styles.depositContainer}
      className="flex-col max-w-xl text-center p-1 mt-5 m-auto text-white"
    >
      <div className="flex p-1 h-32 border-4 border-white">
        <div className="flex w-full border-2 border-white">
          <div id={styles.depositNameContainer} className="w-full">
            <h1 className="">Depositar</h1>
            <div id={styles.depositFunctionsContainer}>
              <div className="flex gap-1">
                {!isLogin ? (
                  <p>No has conectado tu wallet.</p>
                ) : (
                  <>
                    <p>{amount}</p>
                    <p>WORK</p>
                  </>
                )}
              </div>
              <button
                id={styles.depositWalletButtonContainer}
                className="flex items-center h-2 px-5 py-3 justify-center bg-green-900 text-white hover:bg-green-600"
              >
                <span className="text-yellow-400">D</span>epositar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;

// <form
//   onSubmit={(e) => {
//     e.preventDefault();
//     handleSubmit();
//   }}
//   className="flex flex-col gap-2"
// >
//   <label className="text-left text-xl">Task name</label>
//   <input
//     type="text"
//     placeholder="Name"
//     className="border-2 border-slate-300 rounded-md p-2"
//     onChange={(e) => setTasks({ ...tasks, taskName: e.target.value })}
//   />
//   <label className="text-left text-xl">Task description</label>

//   <input
//     type="text"
//     placeholder="Description"
//     className="border-2 border-slate-300 rounded-md p-2"
//     onChange={(e) =>
//       setTasks({ ...tasks, taskDescription: e.target.value })
//     }
//   />

//   {Button()}
// </form>;
