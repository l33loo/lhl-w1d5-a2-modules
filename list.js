/*
Exercise

A local research group has tasked you with building their new web application!
They want to be able to input numerical data and sort it accordingly.
For this application, you're going to need a custom module for sorting data.

With your new knowledge of importing and exporting modules, as well as creating
private functions and variables, do the following:

Create a module that exports a function that takes a number as a parameter and
stores it in a list. The list should not be accessible from outside the module.

Export another function that returns a version of the data list that is sorted
in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

Implement a Node.js script that imports the functionality of your module, adds
at least 5 different data points to the module's data list, and outputs the sorted
list.
*/

var list = [];

var addNum = function(num) {
  list.push(num);
};

var getList = function() {
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
};

module.exports = {
  addNum: addNum,
  getList: getList
}