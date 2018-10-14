/* Your code goes here */
var customerName ='bob';
// function upperCaseCustomerName () {
//   return customerName.toUpperCase;
// }
// function setBestCustomer () {
//   var bestCustomer = 'not bob';
// }
function upperCaseCustomerName() {
  customerName=customerName.toUpperCase();
  return customerName;
}
function setBestCustomer() {
  bestCustomer='not bob';
}
function overwriteBestCustomer() {
  bestCustomer='maybe bob';
}
const leastFavoriteCustomer='Ted';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer='Jack';
}