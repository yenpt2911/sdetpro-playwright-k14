import AnimalRacing from "./AnimalRacing";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const dog = new Dog("Dog");
const horse = new Horse("Horse")
const tiger = new Tiger("Tiger");
const winner = AnimalRacing.getWinner([horse, tiger, dog]);
console.log(winner);
