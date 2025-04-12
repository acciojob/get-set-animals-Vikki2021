//complete this code
class Animal {
	constructor(species) {
		this._species = species;
	}

	get species() {
		return `species of animal is ${this._species}`
	}

	makeSound() {
		console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	//
	bark() {
		console.log("woof");
	}
	
}

class Cat extends Animal {
	//
	purr() {
		console.log("purr");
	}
}

// Creating an instance of Cat
const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();

// Creating an instance of Dog
const myDog = new Dog("Golden Retriever");
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
