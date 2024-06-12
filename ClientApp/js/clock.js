const timeElement = document.getElementById("clock");

const urlaaa='http://worldtimeapi.org/api/timezone/Europe/Warsaw'
fetch(urlaaa)
.then(response => {
    console.log(response);
})
