// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract project1 {
    // constructor() public {}

	function hello() public pure returns (string memory) {
		return "Hello World";
	}

	function add(uint256 a, uint256 b) public pure returns (uint256) {
		return a + b;
	}
}