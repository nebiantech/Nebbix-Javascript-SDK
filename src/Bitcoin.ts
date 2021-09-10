class Bitcoin extends Request {
    /**
     *
     */
    
    sendRequest (url) {
        
        fetch('https://google.com')
        .then(console.log)
    }
}

const btc = new Bitcoin();

console.log(btc.sendRequest('url'))