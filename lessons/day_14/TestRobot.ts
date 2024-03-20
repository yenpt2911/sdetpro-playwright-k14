import { charge } from './Charger';
import SolarRobotCat from './SolarRobotCat';
import BatteryRobotCat from './BatteryRobotCat';

const solarRobotCat = new SolarRobotCat("Solar", 1);
const batteryRobotCat = new BatteryRobotCat("Battery", 2);

charge([solarRobotCat, batteryRobotCat]);
