async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const PlantBatch = await ethers.getContractFactory("PlantBatch");
  const pb = await PlantBatch.deploy();
  await pb.deployed();
  console.log("PlantBatch deployed to:", pb.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
