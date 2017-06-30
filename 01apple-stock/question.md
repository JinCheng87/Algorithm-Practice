##1 Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
##2 Suppose we could access yesterday's stock prices as an array, where:

##2 The indices are the time in minutes past trade opening time, which was 9:30am local time.
##2 The values are the price in dollars of Apple stock at that time.
##2 So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

##2 Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

##2 For example:

##3 var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

##3 getMaxProfit(stockPricesYesterday);
##3 // returns 6 (buying for $5 and selling for $11)

##2 No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass)