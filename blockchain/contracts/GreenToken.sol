// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GreenToken {
    string public name = "GreenToken";
    string public symbol = "GT";
    uint8 public decimals = 18;
    uint public totalSupply;

    mapping(address => uint) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint value);

    constructor(uint initialSupply) {
        totalSupply = initialSupply * 10 ** uint(decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint value) public returns (bool success) {
        require(balanceOf[msg.sender] >= value, "Not enough tokens");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}
