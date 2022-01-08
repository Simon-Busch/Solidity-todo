const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TodoList", function () {
  let TodoList, TodoContract, owner, addr1, addr2;
  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    TodoList = await ethers.getContractFactory("TodoList");
    TodoContract = await TodoList.deploy();
    await TodoContract.deployed();
  })
});
