module.exports = function isDog(animal) {
    return dogs.some((item) => animal.toLowerCase() == item.toLowerCase())
}

const dogs = [
    "Dog",
    "Cat",
    "Bird"
]