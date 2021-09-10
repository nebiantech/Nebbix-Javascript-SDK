"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nebbix = void 0;
// const axios = require("axios")
var axios_1 = require("axios");
var BASE_URL = "https://core.nebbix.com/userApi";
var Nebbix = /** @class */ (function () {
    function Nebbix(userAccessToken, clientId) {
        this.userAccessToken = "";
        this.clientId = "";
        this.userAccessToken = userAccessToken;
        this.clientId = clientId;
    }
    /**
     * createWalletAddress
     */
    Nebbix.prototype.createWalletAddress = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/create_address", __assign({}, body))];
            });
        });
    };
    /**
     * createWallet
     */
    Nebbix.prototype.createWallet = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/create", __assign({}, body))];
            });
        });
    };
    /**
     * getWallets
     */
    Nebbix.prototype.getWallets = function (currency) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet?currency=" + currency, {}, "GET")];
            });
        });
    };
    /**
     * sendCrypto
     */
    Nebbix.prototype.sendCrypto = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("/wallet/send", __assign({}, body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * initializeTransactions
     */
    Nebbix.prototype.initializeTransactions = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/payment/initialize", __assign({}, body))];
            });
        });
    };
    /**
     * getCoinsWithWallet
     */
    Nebbix.prototype.getCoinsWithWallet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/coins", {}, "GET")];
            });
        });
    };
    /**
     * getWalletBalance
     */
    Nebbix.prototype.getWalletBalance = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/balance/" + id, {}, "GET")];
            });
        });
    };
    /**
     * paymentQuery
     * GET request to query transaction;
    */
    Nebbix.prototype.paymentQuery = function (ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/payment/query?reference_code=" + ref, {}, "GET")];
            });
        });
    };
    /**
     * createBtcwallet
    */
    Nebbix.prototype.createBtcwallet = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/btc/create", __assign({}, body))];
            });
        });
    };
    /**
     * createBtcwalletAddress
    */
    Nebbix.prototype.createBtcwalletAddress = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/btc/create_address", __assign({}, body))];
            });
        });
    };
    /**
     * getBtcWallets
    */
    Nebbix.prototype.getBtcWallets = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/btc", {}, "GET")];
            });
        });
    };
    /**
     * getBtcWallet
    */
    Nebbix.prototype.getBtcWallet = function (wallet_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/btc/getWalletDetails/" + wallet_id, {}, "GET")];
            });
        });
    };
    /**
     * createLtcwallet
    */
    Nebbix.prototype.createLtcwallet = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/ltc/create", __assign({}, body))];
            });
        });
    };
    /**
     * createLtcwalletAddress
    */
    Nebbix.prototype.createLtcwalletAddress = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/ltc/create_address", __assign({}, body))];
            });
        });
    };
    /**
     * getLtcWallet
    */
    Nebbix.prototype.getLtcWallet = function (wallet_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/ltc/get_wallets?wallet_id=" + wallet_id, {}, "GET")];
            });
        });
    };
    /**
     * createDogewallet
    */
    Nebbix.prototype.createDogewallet = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/doge/create", __assign({}, body))];
            });
        });
    };
    /**
     * createDogewalletAddress
    */
    Nebbix.prototype.createDogewalletAddress = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/doge/create_address", __assign({}, body))];
            });
        });
    };
    /**
     * getDogeWallet
    */
    Nebbix.prototype.getDogeWallet = function (wallet_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest("/wallet/doge/get_wallets?wallet_id=" + wallet_id, {}, "GET")];
            });
        });
    };
    /**
     * sendBtc
    */
    Nebbix.prototype.sendBtc = function (body) {
        return this.sendRequest("/wallet/btc/send", __assign({}, body));
    };
    /**
     * sendLtc
    */
    Nebbix.prototype.sendLtc = function (body) {
        return this.sendRequest("/wallet/ltc/send", __assign({}, body));
    };
    /**
     * sendDoge
    */
    Nebbix.prototype.sendDoge = function (body) {
        return this.sendRequest("/wallet/doge/send", __assign({}, body));
    };
    /**
     * sendRequest
     * Send POST or GET request to BASE_URL;
    */
    Nebbix.prototype.sendRequest = function (url, body, method) {
        if (method === void 0) { method = "POST"; }
        return __awaiter(this, void 0, void 0, function () {
            var data_1, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(method == "GET")) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios_1.default.get("" + BASE_URL + url, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'user-access-token': this.userAccessToken,
                                    'client-id': this.clientId
                                }
                            }).then(function (e) { return e === null || e === void 0 ? void 0 : e.data; })
                                .catch(function (e) {
                                var response = e.response;
                                throw response.data;
                            })];
                    case 1:
                        data_1 = (_a.sent()).data;
                        return [2 /*return*/, data_1];
                    case 2: return [4 /*yield*/, axios_1.default.post("" + BASE_URL + url, __assign({}, body), {
                            headers: {
                                'Content-Type': 'application/json',
                                'user-access-token': this.userAccessToken,
                                'client-id': this.clientId
                            }
                        }).then(function (e) { return e === null || e === void 0 ? void 0 : e.data; })
                            .catch(function (e) {
                            var response = e.response;
                            throw response.data;
                        })];
                    case 3:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Nebbix;
}());
exports.Nebbix = Nebbix;
