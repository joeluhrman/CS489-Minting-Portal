// Work of Kevin Murray
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Social {
    // Address of contract owner
    address public owner;

    // Structure of a message. 
    //Consists of user address, text, time created, exists, list of users who have liked, and number of likes.
    struct Message{
        address id;
        string text;
        uint256 timestamp;
        bool exists;
        address[] likes;
        uint256 likeCount;
    }

    // Structure of a person which consists of their address and username
    struct Person{
        address id;
        string username;
    }

    // List of all messages to display for feed
    Message[] allMessages;

    // Mapping of user addresses to a list of messages representing the user's thread
    mapping (address => Message[]) public thread;

    // Mapping of a user address to a person representing all users
    mapping (address => Person) public users;

    // Mapping of a string to a person representing all usernames
    mapping (string => Person) public usernames;

    // On creation of a contract
    constructor(){
        owner = msg.sender;
        address[] memory likeList;
        // Adds first message as "New contract deployed" to initialize a message
        Message memory newMessage = Message(msg.sender, "New contract deployed", block.timestamp, true, likeList, 0);
        thread[msg.sender].push(newMessage);
        Person memory firstUser = (Person(msg.sender, "Owner"));
        users[owner] = firstUser;
        usernames["Owner"] = firstUser;
        allMessages.push(newMessage);
    }
    
    // Function to add a message to the user's thread
    function addMessage(string memory _message) public {
        address[] memory likeList;
        Message memory newMessage = Message(msg.sender, _message, block.timestamp, true, likeList, 0);
        thread[msg.sender].push(newMessage);
        allMessages.push(newMessage);
    }

    // Function to like a message if user has not already liked it
    function likeMessage(uint256 index) public  {
        // Require valid index
        require(index < allMessages.length, "Invalid message index");
        Message storage message = allMessages[index];
        bool alreadyLiked = false;
        // Iterate through likers to make sure instance is unique
        for (uint256 i = 0; i < message.likes.length; i++) {
            if (message.likes[i] == msg.sender) {
                alreadyLiked = true;
                break;
            }
        }
        // If unique like then accept it
        if (!alreadyLiked){
            allMessages[index].likes.push(msg.sender);
            allMessages[index].likeCount ++;
        }
    }

    // Function to add a user to the application
    function addUser(string memory _username) public {
        Person memory newUser = (Person(msg.sender, _username));
        users[msg.sender] = newUser;
        usernames[_username] = newUser;
    }

    // Function to find all messages from a user
    function findMessages(string memory _username) public view returns (Message[] memory){
        address user =  usernames[_username].id;
        if (thread[user].length > 0)
            return thread[user];
        else
            return new Message[](0);
    }
    
    // Function to find all messages from a user by address
    function findMessagesByAddress(address user) public view returns (Message[] memory){
        if (thread[user].length > 0)
            return thread[user];
        else
            return new Message[](0);
    }

    // Function to find a username given the user address
    function findUsername(address _user) public view returns (string memory){
        return users[_user].username;
    }

    // Function to return user's own messages
    function myMessages() public view returns (Message[] memory){
        return thread[msg.sender];
    }

    // Function to display all messages for user's feed
    function displayMessages() public returns (Message[] memory){
        address[] memory likeList;
        if (allMessages.length == 0)
            allMessages.push(Message(msg.sender, "New contract deployed", block.timestamp, true, likeList, 0));
        return allMessages;
    }

}

