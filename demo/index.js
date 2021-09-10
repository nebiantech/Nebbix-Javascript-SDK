const { Nebbix } = require("../dist/");

let nebbix = new Nebbix("clientId", "clientToken");


// nebbix.initializeTransactions({
//     amount: "0.0001",
//     "currency": "btc",
//     "custom_data": {
//         "custom_keys": "custom_value"
//     }
// }).then(e => console.log(e.data)).catch(e => {
//     console.log(e)
// });


// nebbix.createWallet({
//     "name": "Client Wallet new",
//     "currency": "BTC"
// }).then(e => console.log(e.data)).catch(e => {
//     console.log(e)
// });


// nebbix.createWalletAddress({
//     "currency": "BTC"
// }).then(e => console.log(e.data)).catch(e => {
//     console.log(e)
// });

    // nebbix.getWallets("btc")
    // .then(e => {
    //     console.log(e)
    // })

    // nebbix.sendCrypto({
    //     "address": "tb1qpq7ypa334wj07f92x6avv0zt7m2tjawgh5wk8f",
    //     "currency": "BTC",
    //     "amount": "0.001",
    //     "set_fee": "0.00001000",
    //     "memo": "Any text here (optional)"
    // })
    // .then(e => {
    //     console.log(e)
    // })
    // .catch(er => console.error(er))