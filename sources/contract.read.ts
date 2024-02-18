import { Address, contractAddress } from "@ton/core";
import { TonClient4 } from "@ton/ton";
import { Counter } from "./output/sample_Counter";

(async () => {
    const client = new TonClient4({
        endpoint: "https://sandbox-v4.tonhubapi.com", // 🔴 Test-net API endpoint
    });

    // Parameters
    let owner = Address.parse("UQC7rSg92nmO9As7vkGGW1ZjmOvD_7Bpf12ac9o-DQxfP5bb");
    let init = await Counter.init(owner);
    let contract_address = contractAddress(0, init);

    // Prepareing
    console.log("Reading Contract Info...");
    console.log(contract_address);

    // Input the contract address
    let contract = await Counter.fromAddress(contract_address);
    let contract_open = await client.open(contract);
    console.log("Counter Value: " + (await contract_open.getValue()));
})();
