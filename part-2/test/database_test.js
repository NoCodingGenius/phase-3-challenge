const expect = require('chai').expect;
const db = require('../databaseConnection');
const queries = require('../database');

describe('Queries', function () {
  it('productList', function () {
    return queries.productList('dairy')
      .then(function (results) {
        expect(results[2].product_name).to.equal('Cream Cheese');
      })
  });
  it('shopperOrders', function (){
    return queries.shopperOrders('3')
      .then(function (results) {
        expect(results[1].total_cost).to.equal('10.81');
      })
  });
  it('realShoppers', function (){
    return queries.realShoppers()
      .then(function (results) {
        expect(results[3].number_of_orders).to.equal('1');
      })
  });
});
