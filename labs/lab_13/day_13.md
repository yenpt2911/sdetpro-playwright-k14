### Lab_13:
Racing animal simple version*
When an animal was born, it will have a random speed with below info

Horse: Max 75 km/h
Tiger: Max 100 Km/h
Dog: Max 60 KM/h*
Create an Animal class with a method getSpeed() which return animal's speed
Create 3 objects for those 3 animal type
Run and see which animal is winner for racing
Print result with format: Winner is <Animal name>, with speed: <speed>
Ex: const randomNumber = Math.floor(Math.random() * 100) + 1;

## Solution:
. SDET -> class diagram
. Model: IS-A relationship (Design concept)
. Controller(IS-A) relationship
. Usage: Create object -> create concrete/ child classes, use the controller to process models

### Models
* Animal: field/ attribute/ property -> speed: number, name: string

### Controller:
* getWinner(animalList: Animal[]): Animal -> getSpeed: current value of the speed
