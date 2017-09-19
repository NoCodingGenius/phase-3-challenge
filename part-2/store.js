#!/usr/local/bin/node

const queries = require('./database');
const print = require('node-print');

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case 'product-list':
    queries.productList(argument)
      .then(function (section) {
        print.pt(section);
        process.exit();
    }).catch(function (error) {
      console.log('An error has occured', error);
    })
    break;
  case 'shopper-orders':
    queries.shopperOrders(argument)
      .then(function (orders) {
        print.pt(orders);
        process.exit();
      }).catch(function (error) {
        console.log('An error occured', error);
      })
    break;
  case 'real-shoppers':
    queries.realShoppers()
      .then(function (shoppers) {
        print.pt(shoppers);
        process.exit();
      }).catch(function (error) {
        console.log('An error occured', error);
      })
    break;
  default:
    console.log(`${command} is not a valid command!`);

}
