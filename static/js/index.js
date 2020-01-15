// Mouse click
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);     
    });
}

// Keyboard press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Required functions
// Play Sound
function makeSound(select) {
    switch (select) {
        case "w":
            let crash = new Audio("static/sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            let kick = new Audio("static/sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let snare = new Audio("static/sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("static/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("static/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio("static/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("static/sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            break;
    }
}

// Make animation once button is clicked
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}