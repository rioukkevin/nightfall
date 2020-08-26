const assert = require('assert');
const request = require('request');

describe('transactions', function () {

  it('should add new transaction en database', function () {

    request.post('http://localhost:3000/transactions/create/1', {}, function (error, response, body) {

    });

  });

});