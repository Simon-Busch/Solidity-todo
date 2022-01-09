import React,{ useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from './artifacts/contracts/TodoList.sol/TodoList.json';

import './App.css';

const App = () => {
  const contractAddress = '0x04636789C48A8BEF23012fDB5247b061db0a6346';
	const contractABI = abi.abi;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
    </div>
  );
}

export default App;
