import Head from "next/head";
import React from "react";

// import abi from "../contracts/Token1.json";
// import styles from "../styles/Home.module.css";
import Deposit from "../components/Deposit/Deposit";
import Name from "../components/Name/Name";
import Wallet from "../components/Wallet/Wallet";
import Borrow from "../components/Borrow/Borrow";
import Pay from "../components/Pay/Pay";
import SideInfo from "../components/SideInfo/SideInfo";

export default function Home() {
  return (
    <div
      id="home"
      className="min-w-screen min-h-screen flex-col justify-center items-center"
    >
      <Head>
        <title>Gotify</title>
        <meta name="description" content="Tipping site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-col p-5 mb-10">
        <SideInfo />
        <Name />
        <Wallet />
        <Deposit />
        <Borrow />
        <Pay />
      </div>
    </div>
  );
}
