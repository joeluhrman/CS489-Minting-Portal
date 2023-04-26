// Function to test sol file
const testing = async () => {

    const [owner] = await hre.ethers.getSigners();
    const threadFactory = await hre.ethers.getContractFactory("Social");

    // Deploy contract
    const threadContract = await threadFactory.deploy();
    await threadContract.deployed();

    console.log("Contract deployed to: ", threadContract.address);
    console.log("Contract deployed by: ", owner.address);

    /*
    await threadContract.addUser("Kevin");
    await successfulMsg(threadContract, "I just added this message!");
    messages = await threadContract.myMessages()

    const messageInfo = await Promise.all(messages.map(async msg => {
      const date = new Date(msg.timestamp * 1000);
      const formattedDate = date.toISOString();
      const name = await threadContract.findUsername(msg.id);
      return { name: name, text: msg.text, timestamp: formattedDate };
    }));

    console.log(messageInfo);
    */
};


const successfulMsg = async (contract, message) =>{
  await contract.addMessage(message);
};

// Try testing block
const tryTesting = async () => {
    try {
      await testing();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

// Run test functions safely
tryTesting();