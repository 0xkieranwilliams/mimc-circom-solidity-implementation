const {ethers} = require("ethers")

const generateBigNumbers = () => {
  for (let i = 0; i < 10; i++) {
    const randomBytes = ethers.randomBytes(32);
    const hexValue = ethers.hexlify(randomBytes);
    const bigNumber = BigInt(hexValue);
    // console.log(randomBytes)
    // console.log(hexValue)
    console.log(bigNumber.toString())
  }
}

generateBigNumbers()
