import { useState, useEffect } from "react";
import { ethers } from "ethers";

import styles from "./Pay.module.css";
import useAppContext from "../../context/AppContext";
import { AppContextInterface } from "../../context/AppContextTypes";

const Pay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [amount, setAmount] = useState(0);
  const { isLogin } = useAppContext() as AppContextInterface;

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
      id={styles.payContainer}
      className="flex-col max-w-xl text-center p-1 mt-5 m-auto text-white"
    >
      <div className="flex p-1 h-32 border-4 border-white">
        <div className="flex w-full border-2 border-white">
          <div id={styles.payNameContainer} className="w-full">
            <h1 className="text-black">Pagar</h1>
            <div id={styles.payFunctionsContainer}>
              <div className="flex gap-1">
                {!isLogin ? (
                  <p className="text-black">No has conectado tu wallet.</p>
                ) : (
                  <>
                    <input
                      type="number"
                      // defaultValue={100000}
                      placeholder="1000000"
                      className="w-20 text-gray-400"
                    />
                    <p className="text-black">COP</p>
                  </>
                )}
              </div>
              <button
                id={styles.payWalletButtonContainer}
                className="flex items-center h-2 px-5 py-3 justify-center bg-green-900 text-white hover:bg-green-600"
              >
                <span className="text-yellow-400">P</span>agar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
