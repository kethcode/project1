const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Project1", function () {
	it("should deploy", async function () {

		const project1Factory = await ethers.getContractFactory("project1");

		const project1 = await project1Factory.deploy();
		await project1.deployed();
		console.log("  project1 deployed to:", project1.address);

		const response = await project1.hello();
		console.log(response);

		const response2 = await project1.add(1, 2);
		console.log(response2);

		// const project2 = await project1Factory.deploy();
		// await project2.deployed();
		// console.log("project2 deployed to:", project2.address);
	})
});