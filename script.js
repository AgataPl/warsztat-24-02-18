var seconsCounter = 1

setInterval(
    function (){
        console.log(seconsCounter++)

    },
    1000
)

var globalVriable = 'GLOBAL'

function add(a, b){
    var someVariable = 123
    globalVriable = 321
    console.log(globalVriable)
    return a + b
}

//function expression
var add2=function (a, b){
    var someVariable = 123
    globalVriable = 321
    console.log(globalVriable)
    return a + b
}

//assiging function to another variable
var add3 = add2
var result = add(3,5)
console.log(result)
console.log(someVariable)


