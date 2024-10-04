const { expect } = require('chai');
const { ethers } = require('hardhat');
const { describe, beforeEach } = require('node:test');

describe("Integration Test: Token and AnotherContract", async function () {
    let Token, token, AnotherContract, anotherContract, user, owner;

    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();

        Token = await ethers.getContractFactory('Token');
        token = await Token.deploy();
        await token.waitForDeployment();

        AnotherContract = await ethers.getContractFactory('AnotherContract');
        anotherContract = await AnotherContract.deploy(await token.getAddress());
        await anotherContract.waitForDeployment();                
    });

    it('should transfer tokens to AnotherContract', async function () {});
});