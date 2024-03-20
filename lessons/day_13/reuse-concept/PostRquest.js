// child class/ concrete class
const Request = require('./Request');
class PostRequest extends Request {

    setMethod(method) {
        super.setMethod('POST');
    }
}

module.exports = PostRequest;