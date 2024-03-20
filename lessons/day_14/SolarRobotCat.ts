import RobotCat from "./RobotCat";

export default class SolarRobotCat extends RobotCat {

    constructor(name: string, id: number) {
        super(name, id);
    }
    
    charge(): string {
        return super.charge() + 'with  with solar circuit...';
    }


}
