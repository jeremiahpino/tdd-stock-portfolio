// -- Functions --

// Error Class
class ShareSaleException extends Error {
    constructor(message) {
      super(message);
      this.name = "ShareSaleException";
    }
  }

// stock portfolio object
class Portfolio {
    constructor() {
        
        // attributes
        this.numShares = 0;
        this.tickerSymbol = "";

        // store ticker symbol and share number in dictionary
        this.stockDictionary = {}

    }

    // getter function for number of shares
    get getNumShares() {
        return this.numShares;
    }

    // getter function for stock ticker symbol
    get getTickerSymbol() { 
        return this.tickerSymbol;
    }

    // set new number of shares
    set changeNumShares(newShareNum) {
        this.numShares = newShareNum;
    }

    // set new ticker symbol
    set changeTickerSymbol(newTickerSymbol) {
        this.tickerSymbol = newTickerSymbol
    }

    // check for 0 shares (empty portfolio)
    emptyPortfolio() {
        if(this.numShares === 0) {
            return true
        }
        return false
    }

    // create dictionary of ticker symbol (key) and share number (value)
    createDict(newTickerSymbol, newShareNum) {

        // portfolio only adds owned stock (at least one stock should be owned)
        if (newShareNum > 0) {
            // append ticker symbol and share number to dictionary
            this.stockDictionary[newTickerSymbol] = newShareNum
        }

    }

    // find unique number of ticker symbols
    uniqueTickerSymbols() {

        // return length of list of keys of stockDictionary
        return Object.keys(this.stockDictionary).length
    }

    // return the number of shares (value)
    getShareNum(tickerKey) {
        return this.stockDictionary[tickerKey]
    }

    // sell off shares of stock
    sellShares(tickerSymbol, numSharesSell) {

        // get total number of shares for ticker symbol
        var numberOfShares = this.stockDictionary[tickerSymbol];

        //console.log("Total Number of Shares: ", numberOfShares)

        //console.log("Shares to Sell: ", numSharesSell)

        try {

            console.log("In try.")
            // if number of total shares is greater than number shares wanting
            // to be sold throw exception
            if(numberOfShares < numSharesSell) {

                // throw error 
                throw new ShareSaleException;
            }
            else {

                // complete sale transaction
                const saleTransaction = numberOfShares - numSharesSell;

                //console.log("Sale Transaction: ", saleTransaction);

                // update finished sale transaction
                this.stockDictionary[tickerSymbol] = saleTransaction;
            }

        }
        catch(e) {

            // catch error and send error message
            if(e instanceof ShareSaleException) {

                // print error message
                console.error("Cannot sell that amount of shares.")
            }

        }

        //console.log("Shares After Sell: ", this.stockDictionary[tickerSymbol]);

    }

}

// exports.stockTicker = stockTicker;
module.exports = Portfolio;