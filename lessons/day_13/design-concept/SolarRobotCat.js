const RobotCat = require('./RobotCat');

// IS-A
class SolarRobotCat extends RobotCat {
    charge() {
        return super.charge() + 'with solar circuit';
    }
}

module.exports = SolarRobotCat;