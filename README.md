```
const { Nebbix } = require("nebbix-js-sdk");

let nebbix = new Nebbix("clientId", "clientToken");

```

### 1 
### Initialize a payment

```
nebbix.initializeTransactions({
    amount: "0.0001",
    "currency": "btc",
    "custom_data": {
        "custom_keys": "custom_value"
    }
}).then(e => console.log(e.data)).catch(e => {
    console.log(e)
});

```
// Example response

```
{
    "success": true,
    "data": {
        "transaction": {
            "title": "API transaction",
            "memo": "Memo",
            "amount": "0.00001000",
            "status": "pending",
            "phone": "Phone",
            "address": "tb1qla08peppmcpvkcj2a0vfearrvvwqys25mzj2kt",
            "ref": "CglZV51yxBuvXGd",
            "custom_data": "{\"custom_keys\":\"custom_value\"}",
            "created_by_type": "Client Api",
            "type": "btc",
            "sub_type": "api",
            "updated_at": "2021-04-04T16:34:52.000000Z",
            "created_at": "2021-04-04T16:34:46.000000Z",
            "id": 102,
            "dollar_value": 0.5796405000000001
        },
        "address": "tb1qla08peppmcpvkcj2a0vfearrvvwqys25mzj2kt",
        "reference_code": "CglZV51yxBuvXGd",
        "expiration_time": "15m",
        "qr_code": "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=tb1qla08peppmcpvkcj2a0vfearrvvwqys25mzj2kt"
    },
    "message": "API transaction created successfully.",
    "ref": "CglZV51yxBuvXGd"
}

```

### 2 
### Query Payment
    
```
    let reference_code = "4EWG5rUdClaw7HS";
    nebbix.paymentQuery(reference_code).then(e => console.log(e.data)).catch(e => {
        console.log(e)
    });

```

    // Example response

```
    {
        id: 100,
        title: 'API transaction',
        memo: 'Memo',
        amount: '0.00010000',
        status: 'pending',
        type: 'btc',
        ref: '4EWG5rUdClaw7HS',
        deleted_at: null,
        created_at: '2021-04-04T00:19:00.000000Z',
        updated_at: '2021-04-04T00:19:11.000000Z',
        phone: 'Phone',
        network: null,
        sell_id: null,
        charges: null,
        address: 'tb1qj4tm8k4xntjr2z08leqm8cs708jay0zyg9y2r9',
        txid: null,
        created_by_type: 'Client Api',
        custom_data: '{"custom_keys":"custom_value"}',
        transaction_details: null,
        sub_type: 'api',
        dollar_value: '5.688448'
    }

```


### 3
###    Create Wallet


```
    nebbix.createWallet({
        "name": "Client Wallet new",
        "currency": "BTC"
    }).then(e => console.log(e.data)).catch(e => {
        console.log(e)
    });
```

    // Example response

```
    {
        success: true,
        data: {
            name: 'Wallet Name',
            wallet_balance: 0,
            locked: false,
            type: 'btc',
            updated_at: '2021-04-04T00:22:17.000000Z',
            created_at: '2021-04-04T00:22:17.000000Z',
            id: 12
        },
        message: 'Wallet created successfully.',
        ref: 'kfmd1FCzdfxJhcA'
    }
```



### 4
### createWalletAddress

```
    nebbix.createWalletAddress({
        "currency": "BTC"
    }).then(e => console.log(e.data)).catch(e => {
        console.log(e)
    });
```

    // Example response
    
```
    {
        success: true,
        data: {
            name: 'Wallet Name',
            address: 'tb1q0vg5k6wczqdcea5pghg53h0xpx6yxmpp6jr3m0',
            privateKey: 'cMgwA8i2cxpW95LXiNz6B6Ff3hKiJfU19YyQ6seAQxy3pbPTB4vq',
            publicKey: '0370e1dd06412d5e35c2c128f586393987c1bb89d72a86b22cb3c4f6bcac6e0254',
            wallet_id: 12,
            status: 'active',
            updated_at: '2021-04-04T00:24:10.000000Z',
            created_at: '2021-04-04T00:24:10.000000Z',
            id: 29,
            balance: 0
        },
        message: 'Wallet created successfully.',
        ref: 'RBYMCvrnONYvM6r'
    }
```


### 5
### getWallets

```
    nebbix.getWallets("btc").then(e => console.log(e.data)).catch(e => {
        console.log(e)
    });

```

### 6
### sendCrypto

```
    nebbix.sendCrypto({
        "address": "tb1qpq7ypa334wj07f92x6avv0zt7m2tjawgh5wk8f",
        "currency": "BTC",
        "amount": "0.001",
        "set_fee": "0.00001000",
        "memo": "Any text here (optional)"
    })
    .then(e => {
        console.log(e)
    })
    .catch(er => console.error(er))
```

// Example response

```
{
    "success": true,
    "data": "bb5bc545a7cd8ea4e487c6833dbc75ef80a9c67b04f09f3b8544e8cc190f5eb0",
    "message": "Btc sent successfully.",
    "ref": "8bVE65teUO29fmZ"
}
```
