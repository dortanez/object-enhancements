/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}


/* Write an ES2015 Version */
const favoriteNumber = 42
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}


/* Write an ES2015 Version */
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + "says bye!"
    }
}


// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
function createAnimal(animal,verb,noise) {
    return {
        species: animal,
        [verb]() {
            return noise
        }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"