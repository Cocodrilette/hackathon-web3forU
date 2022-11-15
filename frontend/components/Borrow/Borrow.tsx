import { useState } from "react";
import { ethers } from "ethers";

import { Address } from "../../contracts/Main-contract-address.json";
import Contract from "../../contracts/Main.json";
import styles from "./Borrow.module.css";
import useAppContext from "../../context/AppContext";
import { AppContextInterface } from "../../context/AppContextTypes";

const Borrow = () => {
  const { isLogin } = useAppContext() as AppContextInterface;

  return (
    <div
      id={styles.borrowContainer}
      className="flex-col max-w-xl text-center p-1 mt-5 m-auto text-white"
    >
      <div className="flex p-1 h-32 border-4 border-white">
        <div className="flex w-full border-2 border-white">
          <div id={styles.borrowNameContainer} className="w-full">
            <h1 className="">Prestar</h1>
            <div id={styles.borrowFunctionsContainer}>
              <div className="flex gap-1">
                {!isLogin ? (
                  <p>No has conectado tu wallet.</p>
                ) : (
                  <>
                    <input
                      type="number"
                      defaultValue={1}
                      placeholder="100000"
                      className="w-20 text-gray-400"
                    />
                    <p>COP</p>
                  </>
                )}
              </div>
              <button
                id={styles.borrowWalletButtonContainer}
                className="flex items-center h-2 px-5 py-3 justify-center bg-green-900 text-white hover:bg-green-600"
              >
                <span className="text-yellow-400">P</span>restar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borrow;

