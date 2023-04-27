// Work of Kevin Murray
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Social {
    address public owner;

    struct Message{
        address id;
        string text;
        uint256 timestamp;
        bool exists;
    }

    struct Person{
        address id;
        string username;
    }

    Message[] allMessages;

    mapping (address => Message[]) public thread;

    mapping (address => Person) public users;

    mapping (string => Person) public usernames;

    constructor(){
        owner = msg.sender;
        Message memory newMessage = Message(msg.sender, "New contract deployed", block.timestamp, true);
        thread[msg.sender].push(newMessage);
        Person memory firstUser = (Person(msg.sender, "Owner"));
        users[owner] = firstUser;
        usernames["Owner"] = firstUser;
        allMessages.push(newMessage);
    }
    
    function addMessage(string memory _message) public {
        Message memory newMessage = Message(msg.sender, _message, block.timestamp, true);
        thread[msg.sender].push(newMessage);
        allMessages.push(newMessage);
    }

    function addUser(string memory _username) public {
        Person memory newUser = (Person(msg.sender, _username));
        users[msg.sender] = newUser;
        usernames[_username] = newUser;
    }

    function findMessages(string memory _username) public view returns (Message[] memory){
        address user =  usernames[_username].id;
        if (thread[user].length > 0)
            return thread[user];
        else
            return new Message[](0);
    }

    function findUsername(address _user) public view returns (string memory){
        return users[_user].username;
    }

    function myMessages() public view returns (Message[] memory){
        return thread[msg.sender];
    }

    function displayMessages() public view returns (Message[] memory){
        return allMessages;
    }

}
