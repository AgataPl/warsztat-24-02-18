// function declaration
function hello(name, numberOfLogs){
    for(var i = 0; i<numberOfLogs; i++){
        console.log("Hello " + name + "!")

    }
}

//function invocation (call)
hello('Mateusz', 1)
hello('Agata', 2)
hello('Jan', 3)
hello({name: 'Janina'},1)

