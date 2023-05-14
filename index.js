var number = document.getElementById("number")
var number2 = document.getElementById("number2")
var box = document.getElementById("box")
var vertical = 0;
var horizontal = 0;
console.log(window.innerHeight)
console.log(window.innerWidth)
box.addEventListener("mouseover",function(){
    // Function to generate random number
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    // Function call
    var randomNumVertical = randomNumber(1,window.innerHeight - 60)
    var randomNumHorizontal = randomNumber(1,window.innerWidth - 120)
    if(randomNumVertical === vertical ){
        randomNumber(1,window.innerHeight-60)
        randomNumber(1,window.innerWidth-120)
    }else{
        // Changing the position of box after generating random number
        vertical = randomNumVertical
        box.style.top = randomNumVertical + "px";
        box.style.left = randomNumHorizontal + "px";
    }
})

  
