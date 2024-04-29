const cryptoPriceConverter = require('crypto-price-converter-xid');

// Example usage
(async () => {
    try {
        const btcToUsd = await cryptoPriceConverter.convert('btc', 'usd');
        console.log('1 BTC to USD:', btcToUsd);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
