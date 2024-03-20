export default class RobotCat {

    protected name: String;
    protected id: number;

    constructor(name: String) {
       this.name = name;
     //  this.id = id;
    }

    // setter: change current value of a property to a new one
    // getter: get current value of a property

    setId(id: number): void {
         this.id = id;
    }

    getId(): number {
        return this.id;
    }

    charge() {
        return 'Charging ...';
    }
}

