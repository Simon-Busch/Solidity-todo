const main = async () => {
  const todoListContractFactory = await hre.ethers.getContractFactory('TodoList');
  
  const todoContract = await todoListContractFactory.deploy();

  await todoContract.deployed();
  console.log("Contract deployed to:", todoContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();