const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const indexName = 30;

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  try {
    const merkleTree = new MerkleTree(niceList);
    const name = niceList[30];
    const index = niceList.findIndex(n => n === name);
    const proof = merkleTree.getProof(index)
  
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      // TODO: add request body parameters here!
      proof: proof,
      name: name,
    });
    console.log({ gift });

  } catch (e) {
      console.log("In catch block logging error.message:", error.message);
  }
}

main();