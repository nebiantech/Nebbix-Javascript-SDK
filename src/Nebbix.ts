const axios = require("axios")
const BASE_URL = "https://core.nebbix.com/userApi"

export class Nebbix {
    private userAccessToken = "";
    private clientId = "";
    
    constructor(userAccessToken: string, clientId: string) {
        this.userAccessToken = userAccessToken;
        this.clientId = clientId;
    }
    /**
     * initializeTransactions
     */
    public async initializeTransactions(body) {
        return this.sendRequest("/payment/initialize", {...body});
    }
    public async paymentQuery (ref) {
        return this.sendRequest(`/payment/query?reference_code=${ref}`, {}, "GET");
    }
    public async createBtcwallet (body) {
        return this.sendRequest("/wallet/btc/create", {...body});
    }
    public async createBtcwalletAddress (body) {
        return this.sendRequest("/wallet/btc/create_address", {...body});
    }
    public async getBtcWallets () {
        return this.sendRequest(`/wallet/btc`, {}, "GET");
    }
    public async getBtcWallet (wallet_id) {
        return this.sendRequest(`/wallet/btc/getWalletDetails/${wallet_id}`, {}, "GET");
    }
    
    public async createLtcwallet (body) {
        return this.sendRequest("/wallet/ltc/create", {...body});
    }
    public async createLtcwalletAddress (body) {
        return this.sendRequest("/wallet/ltc/create_address", {...body});
    }
    public async getLtcWallet (wallet_id) {
        return this.sendRequest(`/wallet/ltc/get_wallets?wallet_id=${wallet_id}`, {}, "GET");
    }
    
    public async createDogewallet (body) {
        return this.sendRequest("/wallet/doge/create", {...body});
    }
    public async createDogewalletAddress (body) {
        return this.sendRequest("/wallet/doge/create_address", {...body});
    }
    public async getDogeWallet (wallet_id) {
        return this.sendRequest(`/wallet/doge/get_wallets?wallet_id=${wallet_id}`, {}, "GET");
    }
    
    private async sendRequest (url, body, method = "POST") {
        if (method == "GET") {
            return await axios.get(`${BASE_URL}${url}`, {
                headers: {
                        'Content-Type': 'application/json',
                        'user-access-token': this.userAccessToken,
                        'client-id': this.clientId
                    }
            }).then(e => e)
                .catch(e => {
                    const {response} = e;
                    throw response.data;
                })
        }
        return await axios.post(`${BASE_URL}${url}`, {...body}, {
                headers: {
                        'Content-Type': 'application/json',
                        'user-access-token': this.userAccessToken,
                        'client-id': this.clientId
                    }
            }).then(e => e)
                .catch(e => {
                    const {response} = e;
                    throw response.data;
                })
    }

}

module.exports = Nebbix