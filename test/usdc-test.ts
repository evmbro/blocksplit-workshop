import { expect } from "chai";
import { ethers } from "hardhat";
import { USDC } from "../typechain-types";

describe("USDC", function () {
  
    it("serves as a playground for testing USDC coin", async () => {
        const accounts = await ethers.getSigners();
        const address = await accounts[0].getAddress();

        const USDCFactory = await ethers.getContractFactory("USDC");
        const token: USDC = (await USDCFactory.deploy()) as USDC;
                
        await token.mint(address, 100);
        console.log(await token.balanceOf(address));
    })

});
