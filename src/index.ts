// const axios = require("axios")
import axios from "axios";
const BASE_URL = "https://core.nebbix.com/userApi"

export class Nebbix {
    private userAccessToken = "";
    private clientId = "";
    
    constructor(userAccessToken: string, clientId: string) {
        this.userAccessToken = userAccessToken;
        this.clientId = clientId;
    }
    
    /**
     * createWalletAddress
     */

    public async createWalletAddress (body) {
        return this.sendRequest("/wallet/create_address", {...body});
    }

    /**
     * createWallet
     */

    public async createWallet (body) {
        return this.sendRequest("/wallet/create", {...body});
    }

    
    /**
     * getWallets
     */

     public async getWallets (currency) {
        return this.sendRequest("/wallet?currency="+currency, {}, "GET");
    }

    /**
     * sendCrypto
     */
     public async sendCrypto(body) {
        return await this.sendRequest("/wallet/send", {...body});
    }

    /**
     * initializeTransactions
     */
    public async initializeTransactions(body) {
        return this.sendRequest("/payment/initialize", {...body});
    }

    /**
     * getCoinsWithWallet
     */
    public async getCoinsWithWallet() {
        return this.sendRequest("/coins", {}, "GET");
    }

    /**
     * getWalletBalance
     */
    public async getWalletBalance(id) {
        return this.sendRequest(`/balance/${id}`, {}, "GET");
    }

    /**
     * paymentQuery
     * GET request to query transaction;
    */
    
    public async paymentQuery (ref) {
        return this.sendRequest(`/payment/query?reference_code=${ref}`, {}, "GET");
    }

    /**
     * createBtcwallet
    */
    
    public async createBtcwallet (body) {
        return this.sendRequest("/wallet/btc/create", {...body});
    }

    /**
     * createBtcwalletAddress
    */
    
    public async createBtcwalletAddress (body) {
        return this.sendRequest("/wallet/btc/create_address", {...body});
    }

    /**
     * getBtcWallets
    */
    
    public async getBtcWallets () {
        return this.sendRequest(`/wallet/btc`, {}, "GET");
    }

    /**
     * getBtcWallet
    */
    
    public async getBtcWallet (wallet_id) {
        return this.sendRequest(`/wallet/btc/getWalletDetails/${wallet_id}`, {}, "GET");
    }

    /**
     * createLtcwallet
    */
    
    public async createLtcwallet (body) {
        return this.sendRequest("/wallet/ltc/create", {...body});
    }

    /**
     * createLtcwalletAddress
    */
    
    public async createLtcwalletAddress (body) {
        return this.sendRequest("/wallet/ltc/create_address", {...body});
    }

    /**
     * getLtcWallet
    */
    
    public async getLtcWallet (wallet_id) {
        return this.sendRequest(`/wallet/ltc/get_wallets?wallet_id=${wallet_id}`, {}, "GET");
    }

    /**
     * createDogewallet
    */
    
    public async createDogewallet (body) {
        return this.sendRequest("/wallet/doge/create", {...body});
    }

    /**
     * createDogewalletAddress
    */
    
    public async createDogewalletAddress (body) {
        return this.sendRequest("/wallet/doge/create_address", {...body});
    }

    /**
     * getDogeWallet
    */
    
    public async getDogeWallet (wallet_id) {
        return this.sendRequest(`/wallet/doge/get_wallets?wallet_id=${wallet_id}`, {}, "GET");
    }

    /**
     * sendBtc
    */

    public sendBtc(body) {
        return this.sendRequest("/wallet/btc/send", {...body});
    }

    /**
     * sendLtc
    */

    public sendLtc(body) {
        return this.sendRequest("/wallet/ltc/send", {...body});
    }

    /**
     * sendDoge
    */

    public sendDoge(body) {
        return this.sendRequest("/wallet/doge/send", {...body});
    }
    /**
     * sendRequest
     * Send POST or GET request to BASE_URL;
    */
     
    private async sendRequest (url, body, method = "POST") {
        if (method == "GET") {
            const { data } = await axios.get(`${BASE_URL}${url}`, {
                headers: {
                        'Content-Type': 'application/json',
                        'user-access-token': this.userAccessToken,
                        'client-id': this.clientId
                    }
            }).then(e => e?.data)
                .catch(e => {
                    const {response} = e;
                    throw response.data;
                })

            return data;
        }
        const { data } = await axios.post(`${BASE_URL}${url}`, {...body}, {
                headers: {
                        'Content-Type': 'application/json',
                        'user-access-token': this.userAccessToken,
                        'client-id': this.clientId
                    }
            }).then(e => e?.data)
                .catch(e => {
                    const {response} = e;
                    throw response.data;
                })
            return data;
    }

}