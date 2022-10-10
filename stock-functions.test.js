

// -- Testing Module --

// import the base module using the require statement
const Portfolio = require("./stock-functions.js");

// -- Setup --

// before each function create an object
beforeEach ( () => {

  return stockPortfolio = new Portfolio();

});

// -- Testing Functions -- 

// -- Step 1 --
// check if object is being created
test("Object Created Test", () => {
    const shareTarget = 0;
    const tickerTarget = "";

    expect(shareTarget).toBe(stockPortfolio.getNumShares);
    expect(tickerTarget).toBe(stockPortfolio.getTickerSymbol);
  });

// -- Step 2 --
// check if no shares are owned
test("Empty Shares 1", () => {
  const boolTrue = true;

  expect(boolTrue).toBe(stockPortfolio.emptyPortfolio());
});

// test 2
test("Empty Shares 2", () => {
  const boolFalse = false;
  stockPortfolio.numShares = 77;

  expect(boolFalse).toBe(stockPortfolio.emptyPortfolio());
});

// -- Step 3 --
// check for unique ticker symbols
test("Unique Ticker Symbols 1", () => {

  const uniqueNumTarget = 2;

  // set new ticker symbol and share number
  stockPortfolio.createDict("GME", 77);
  stockPortfolio.createDict("RBLX", 10);

  expect(uniqueNumTarget).toBe(stockPortfolio.uniqueTickerSymbols());
});

// test 2
test("Unique Ticker Symbols 2", () => {

  const uniqueNumTarget = 0;

  // no ticker symbol added

  expect(uniqueNumTarget).toBe(stockPortfolio.uniqueTickerSymbols());
});

// test 3
test("Unique Ticker Symbols 3", () => {

  const uniqueNumTarget = 3;

  // set new ticker symbol and share number
  stockPortfolio.createDict("APPL", 34);
  stockPortfolio.createDict("RBLX", 34);
  stockPortfolio.createDict("GE", 3);

  expect(uniqueNumTarget).toBe(stockPortfolio.uniqueTickerSymbols());
});

// -- Step 4 --
// check for unique ticker symbols
test("Purchase 1", () => {

  const shareTarget = 13;

  // set new ticker symbol and share number
  stockPortfolio.createDict("AAPL", 13);


  // purchase made
  expect(shareTarget).toBe(stockPortfolio.getShareNum("AAPL"));

});

// test 2
test("Purchase 2", () => {

  const shareTarget1 = 13;
  const shareTarget2 = 34;
  const shareTarget3 = 3;

  // set new ticker symbol and share number
  stockPortfolio.createDict("AAPL", 13);
  stockPortfolio.createDict("RBLX", 34);
  stockPortfolio.createDict("GE", 3);

  // purchase made
  expect(shareTarget1).toBe(stockPortfolio.getShareNum("AAPL"));
  expect(shareTarget2).toBe(stockPortfolio.getShareNum("RBLX"));
  expect(shareTarget3).toBe(stockPortfolio.getShareNum("GE"));

});

// -- Step 5 --
// subtract from shares from ticker symbol
test("Sale 1", () => {

  const saleTarget = 11;

  // set new ticker symbol and share number
  stockPortfolio.createDict("AAPL", 13);

  // sell shares
  stockPortfolio.sellShares("AAPL", 2);

  // sale made
  expect(saleTarget).toBe(stockPortfolio.getShareNum("AAPL"));

});

// test 2
test("Sale 2", () => {

  const saleTarget = 45;

  // set new ticker symbol and share number
  stockPortfolio.createDict("GE", 345);

  // sell shares
  stockPortfolio.sellShares("GE", 300);

  // purchase made
  expect(saleTarget).toBe(stockPortfolio.getShareNum("GE"));

});

// -- Step 6 --
// give number of shares for given symbol
test("Number of Shares 1", () => {

  const shareTarget1 = 13;
  const shareTarget2 = 55;
  const shareTarget3 = 244;

  // set new ticker symbol and share number
  stockPortfolio.createDict("NIKE", 13);
  stockPortfolio.createDict("T", 55);
  stockPortfolio.createDict("DIS", 244);

  // get number of shares
  expect(shareTarget1).toBe(stockPortfolio.getShareNum("NIKE"));
  expect(shareTarget2).toBe(stockPortfolio.getShareNum("T"));
  expect(shareTarget3).toBe(stockPortfolio.getShareNum("DIS"));

});

// test 2 
test("Number of Shares 2", () => {

  const shareTarget1 = 4;
  const shareTarget2 = 55;
  const shareTarget3 = 55;

  // set new ticker symbol and share number
  stockPortfolio.createDict("NIKE", 4);
  stockPortfolio.createDict("T", 55);
  stockPortfolio.createDict("DIS", 55);

  // get number of shares
  expect(shareTarget1).toBe(stockPortfolio.getShareNum("NIKE"));
  expect(shareTarget2).toBe(stockPortfolio.getShareNum("T"));
  expect(shareTarget3).toBe(stockPortfolio.getShareNum("DIS"));

});

// -- Step 7 --
// keep only owned stock (no 0 stocks)
test("Keep Owned Stock 1", () => {

  const shareTarget1 = 13;
  const shareTarget2 = 55;
  const shareTarget3 = undefined;

  // set new ticker symbol and share number
  stockPortfolio.createDict("NIKE", 13);
  stockPortfolio.createDict("T", 55);

  // do not add this stock
  stockPortfolio.createDict("DIS", 0);

  // get number of shares
  expect(shareTarget1).toBe(stockPortfolio.getShareNum("NIKE"));
  expect(shareTarget2).toBe(stockPortfolio.getShareNum("T"));

  // expect undefined (not in portfolio)
  expect(shareTarget3).toBe(stockPortfolio.getShareNum("DIS"));

});

// test 2
test("Keep Owned Stock 2", () => {

  const shareTarget1 = 13;
  const shareTarget2 = undefined;
  const shareTarget3 = undefined;

  // set new ticker symbol and share number
  stockPortfolio.createDict("NIKE", 13);

  // do not add these stocks 
  stockPortfolio.createDict("T", 0);
  stockPortfolio.createDict("DIS", 0);

  // get number of shares
  expect(shareTarget1).toBe(stockPortfolio.getShareNum("NIKE"));

  // expect undefined (not in portfolio)
  expect(shareTarget2).toBe(stockPortfolio.getShareNum("T"));

  // expect undefined (not in portfolio)
  expect(shareTarget3).toBe(stockPortfolio.getShareNum("DIS"));

});

// -- Step 8 --
// raise exception for to many shares sold
test("Raise Exception 1", () => {

  const shareTarget1 = 13;

  // set new ticker symbol and share number
  stockPortfolio.createDict("NIKE", 13);

  // sell shares (error)
  stockPortfolio.sellShares("NIKE", 250);

  // above line of code throws error message 

});

// test 2
test("Raise Exception 2", () => {

  const shareTarget1 = 13;

  // set new ticker symbol and share number
  stockPortfolio.createDict("GE", 300);

  // sell shares (error)
  stockPortfolio.sellShares("GE", 1000);

  // above line of code throws error message 

});





