// child class/ concrete class
const Request = require('./Request');
class GetRequest extends Request {

    setMethod(method) {
        super.setMethod('GET');
    }
}

module.exports = GetRequest;