var seconsCounter = 1

var intervalId = setInterval(
    function (){
        console.log(seconsCounter++)

    },
    1000
)

setTimeout(
    function(){
        clearInterval(intervalId)
    },
    5000
)
