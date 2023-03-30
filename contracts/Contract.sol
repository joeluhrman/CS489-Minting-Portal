// Work of Kevin Murray
pragma solidity ^0.8.0;

import "hardhat/console.sol";

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

    mapping (address => Message[]) public thread;

    mapping (address => Person) public users;

    constructor(){
        owner = msg.sender;
        thread[msg.sender].push(Message(msg.sender, "New contract deployed", block.timestamp, true));
        users[owner] = (Person(msg.sender, "Owner"));
    }
    
    function addMessage(string memory _message) public {
        thread[msg.sender].push(Message(msg.sender, _message, block.timestamp, true));
    }

    function addUser(string memory _username) public {
        users[msg.sender] = (Person(msg.sender, _username));
    }

    function findMessages(address _user) public view returns (Message[] memory){
        if (thread[_user][0].exists)
            return thread[_user];
        else
            return thread[_user];
    }

    function findUsername(address _user) public view returns (string memory){
        return users[_user].username;
    }

    function myMessages() public view returns (Message[] memory){
        return thread[msg.sender];
    }

}
