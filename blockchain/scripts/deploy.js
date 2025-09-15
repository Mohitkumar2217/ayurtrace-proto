async function main() {
  const GreenToken = await ethers.getContractFactory("GreenToken");
  const token = await GreenToken.deploy(1000); // initial supply = 1000 tokens
  await token.deployed();
  console.log("✅ GreenToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
