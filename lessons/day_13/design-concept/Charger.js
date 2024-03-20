class Charger {

    // IS-A Robot Car

    static charge(robotCatList) {
        robotCatList.forEach(robotCat => {
            console.log(robotCat.charge());
        });
    }
}

module.exports = Charger;