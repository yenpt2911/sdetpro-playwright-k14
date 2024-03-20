const GetRequest = require('./GetRequest');
const PostRequest = require('./PostRquest');
const url = 'https://my-api.com/api';

// GET
const request = new GetRequest(url);
request.setMethod();
request.send();
request.verifyResponseStatus();


// POST
const postRequest = new PostRequest(url);
request.setMethod();
request.send();
request.verifyResponseStatus();

postRequest.sayHello();