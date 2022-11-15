import { useState } from "react";
import { ethers } from "ethers";

import { Address } from "../../contracts/Main-contract-address.json";
import Contract from "../../contracts/Main.json";
import styles from "./SideInfo.module.css";
import useAppContext from "../../context/AppContext";
import { AppContextInterface } from "../../context/AppContextTypes";

const SideInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin } = useAppContext() as AppContextInterface;
  const Menu = () => {
    return (
      <div
        id={styles.sideMenuContainer}
        className="flex-col relative max-w-xl text-center p-1 mt-5 m-auto text-white"
      >
        <span
          id={styles.closeSideMenuButton}
          className="text-black absolute text-2xl"
          onClick={() => setIsOpen(false)}
        >
          x
        </span>
        <div className="flex p-1 border-4 border-white">
          <div className="flex w-full border-2 border-white">
            <div id={styles.sideMenuNameContainer} className="w-full">
              <h1 className="">Colaterales</h1>
              <div className={styles.collaterals}>
                <p id={styles.collateralsText}>Depositado</p>
                <p className="mt-1">10 WORKS</p>
              </div>
              <div className={styles.collaterals}>
                <p id={styles.collateralsText}>Prestado</p>
                <p className="mt-1">120.000 COP</p>
              </div>
              <div className={styles.collaterals}>
                <p id={styles.collateralsText}>Cupo</p>
                <p className="mt-1">37.000 COP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OpenButton = () => {
    return (
      <div id={styles.openButtonContainer}>
        <button
          id={styles.openButton}
          className="flex absolute items-center h-2 px-5 py-3 justify-center bg-green-900 text-white hover:bg-green-600"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-yellow-400">C</span>olaterales
        </button>
      </div>
    );
  };

  if (isOpen && isLogin) {
    return <Menu />;
  } else if (isLogin) {
    return <OpenButton />;
  } else {
    return <></>;
  }
};

export default SideInfo;
