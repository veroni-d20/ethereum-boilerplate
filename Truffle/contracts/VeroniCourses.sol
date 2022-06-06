// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

contract VeroniCourses{

    address private _owner;
    uint public courseCount;

    constructor()
    {
        _owner=msg.sender;
        courseCount=0;
    }

    modifier onlyOwner{
        require(msg.sender==_owner,"NOT_AN_ADMIN");
        _;
    }

    mapping(uint=>bytes) public coursesMap;
    mapping(address=>uint[]) public courseAccess;
    

    function createCourse(string memory courseURI)public onlyOwner
    {
        coursesMap[courseCount]=bytes(courseURI);
        courseAccess[msg.sender].push(courseCount);
        courseCount+=1;
    }

    // Users will call this function to buy the course 
    function buyCourse(uint _courseId) public payable
    {
        // require(msg.value>=0.01 ether,"INSUFFICIENT_FUNDS");
        require(_courseId<courseCount,"COURSE_DOES_NOT_EXIST");
        courseAccess[msg.sender].push(_courseId);
    }

    // Only owner can call this function - You will get all the money to your wallet
    function withdraw()public onlyOwner
    {
        (bool callSuccess,)=payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess,"TRANSACTION_FAILED");
    }

}