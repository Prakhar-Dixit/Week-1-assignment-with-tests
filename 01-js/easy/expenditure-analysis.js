/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var categories = {};

  // Calculate total spent per category
  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    var category = transaction.category;
    var price = transaction.price;

    if (categories.hasOwnProperty(category)) {
      categories[category] += price;
    } else {
      categories[category] = price;
    }
  }

  // Create an array of objects with category and total spent
  var result = [];
  for (var category in categories) {
    var obj = {};
    obj[category] = categories[category];
    result.push(obj);
  }

  return result;
}
module.exports = calculateTotalSpentByCategory;
