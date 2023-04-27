// Function to test sol file
const testing = async () => {

    const threadFactory = await hre.ethers.getContractFactory("Social");

    // Deploy contract
    const threadContract = await threadFactory.deploy();
    await threadContract.deployed();
    console.log("Contract deployed to:", threadContract.address);
    await threadContract.addUser("Kevin");
    await successfulMsg(threadContract, "I just added this message!");
    await successfulMsg(threadContract, "Hello class");
    messages = await threadContract.myMessages()
    const messageInfo = await Promise.all(messages.map(async msg => {
      const date = new Date(msg.timestamp * 1000);
      const formattedDate = date.toISOString();
      const name = await threadContract.findUsername(msg.id);
      return { name: name, text: msg.text, timestamp: formattedDate };
    }));
    console.log(messageInfo);
    kevinMessage =  await threadContract.findMessages("Kevin");
    allMessages = await threadContract.displayMessages();
    console.log(allMessages)
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

  const successfulMsg = async (contract, message) =>{
    await contract.addMessage(message);
  };
