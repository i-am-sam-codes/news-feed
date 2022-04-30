
const main = async () => {
    const newsFeedContractFactory = await hre.ethers.getContractFactory("NewsFeed");

    const newsFeedContract = await newsFeedContractFactory.deploy();

    await newsFeedContract.deployed(); // 

    console.log("NewsFeed Contract deployed to: ", newsFeedContract.address);

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();