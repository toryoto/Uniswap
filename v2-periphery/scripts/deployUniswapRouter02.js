const hre = require("hardhat");

async function main() {
  try {
    const factoryAddress = "0xf93d88114129399d9A3B807E883c67fd3Bae5b09";
    const wethAddress = "0x6353D4D1186C1192B4937660B15785a75E0B8b3a";

    const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
    const router = await UniswapV2Router02.deploy(factoryAddress, wethAddress);
    await router.waitForDeployment();

    const routerAddress = await router.getAddress();
    
    console.log("UniswapV2Router02 deployed to:", routerAddress);
  } catch (error) {
    console.error("Deployment failed:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});