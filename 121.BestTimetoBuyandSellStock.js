var maxProfit = function (prices) {
  let low= prices[0];
  let result = 0;
  const len = prices.length;
  for (let i = 0; i < len; i++) {
    if (i +1 > len) {
      return result;
    } else {
      let right = prices[i + 1];
      let diff = right - low;
      if (diff > 0) {
        if (diff > result) {
          result = diff;
        }
      }
      if (low > right) {
        low = right;
      }
    }
  }
  return result;
};


/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/*
Answer
set the low to the first number in array.
subtract the next number in array to check the difference.
if the difference is positive check to see if its greater then current difference.
check to see if the right number is lower then current low.
use this pattern to loop through array.
*/