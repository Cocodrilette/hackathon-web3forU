import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";

import styles from "./Wallet.module.css";
import { useAppContext } from "../../context/AppContext";
import { connectWallet, isWalletConnected } from "../../lib/ethereum";
import { AppContextInterface } from "../../context/AppContextTypes";

const Wallet = () => {
  const { isLogin, setIsLogin, setCurrentAccount } =
    useAppContext() as AppContextInterface;
  const [isError, setIsError] = useState(false);

  const handleConnectWallet = async () => {
    const wallet = await connectWallet();

    if (wallet) {
      setIsLogin(true);
      setCurrentAccount(wallet);
      return;
    }

    setIsError(true);
  };

  const Button = () => {
    if (isError) {
      return (
        <button
          className="flex font-bold items-center h-5 px-4 py-4 justify-center rounded-md border-2 border-white shadow-md bg-red-300 text-black"
          onClick={handleConnectWallet}
        >
          Error connecting wallet. Try again.
        </button>
      );
    }

    if (!isLogin) {
      return (
        <div id={styles.connectWalletButtonContainer} className="">
          <p className="">No has conectado tu wallet.</p>
          <button
            className="flex items-center h-3 px-4 py-3 justify-center  bg-green-900 text-white hover:bg-green-600"
            onClick={handleConnectWallet}
          >
            <span className="text-yellow-400">C</span>onnect Wallet
          </button>
        </div>
      );
    }
  };

  const checkWalletConnection = async () => {
    const wallet = await isWalletConnected();
    if (wallet) {
      setCurrentAccount(wallet);
      setIsLogin(true);
    }
  };

  useEffect(() => {
    checkWalletConnection();
  }, [isLogin]);

  return (
    <div
      id={styles.walletContainer}
      className={`flex-col max-w-xl text-center p-1 mt-5 m-auto text-white ${
        isLogin ? "h-0 p-0 mt-0" : ""
      }`}
    >
      <div
        className={`flex p-1 h-22 ${isLogin ? "" : "border-4 border-white"} `}
      >
        <div
          className={`flex p-3 w-full ${
            isLogin ? "" : "border-2 border-white"
          }`}
        >
          {Button()}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
