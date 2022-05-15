import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xb80484252190542704F2C742fb3Df1ee57Ae49Cd");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ETH Logo",
        description: "This NFT will give you access to ETHDAO!",
        image: readFileSync("scripts/assets/eth-logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();