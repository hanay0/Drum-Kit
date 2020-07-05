
// detecting btn press
var noOfButtons = document.querySelectorAll(".set button").length;

for(var i = 0; i < noOfButtons; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var drumButtonValue = this.innerHTML;  // define it to a variable to shorten the name inside switch case
        makeSound(drumButtonValue);
        buttonAnimation(drumButtonValue);
    });
}


//detecting keyboard's press
// start making keypresses with the method keydown because the first one has been depricated
document.addEventListener("keydown", function(event){
   makeSound(event.key);  //this will get the result of the key pressed on the keyboard and pass it to the function 'makeSound'
   buttonAnimation(event.key);
});



// creating a new function
function makeSound(key){
    switch (key){

        // 1st case
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

            // 2nd case
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

                // 3rd case
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

                   // 4th case
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

                   // 5th case
        case "f":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

                   // 6th case
        case "g":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

                   // 7th case
        case "h":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

                    // 8th case
        case "j":
            var hi_hat = new Audio("sounds/Hi-hat.mp3");
            hi_hat.play();
            break;

                      // 9th case
        case "k":
            var floor_tom = new Audio("sounds/floor-tom.mp3");
            floor_tom.play();
            break;

                    // 10th case
        case "l":
            var ba_bum = new Audio("sounds/Ba-Bum.mp3");
            ba_bum.play();
            break;
    }
}



// adding animations when a button is clicked or a key is pressed
function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    // adding timeout function to remove the class 'pressed' again
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    }, 200);
}




