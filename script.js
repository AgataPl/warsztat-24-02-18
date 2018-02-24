console.log('Hello Agata!')

// data types in JS

//primitives

// strig
var textVariable = "Agata"
console.log(textVariable)

//number
var numberVariable = 43
console.log(numberVariable)

//boolean
var boolVariable = true
console.log(boolVariable)

// null
var nulVariable = null
console.log(nulVariable)

// undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

//objects

var simplestObj = {
    name: "Agata",
    lastname: "Plecha"
}
console.log(simplestObj)

//nested objects with data

var nastedObj = {
    name: "Agata",
    car: {
        brand: "VW",
        model: 4
    }
}
console.log(nastedObj)
console.log(nastedObj.car.model)
console.log(nastedObj.car.year)

//arrays
var simpleArray = [
    1,
    {name: 'Ala', array: [1,4,6]},
    3,
    4,
    5
]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name)
console.log(simpleArray[1]['name'])

