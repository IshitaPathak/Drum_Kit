var n = document.querySelectorAll("button").length; //seleting total number of button.

//detecting button press
for (var i=0; i<n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // console.log(this.style.color="white");

/*If a button was pressed then it checked the innerHTML of the button that 
got pressed and send that to makeSound function in order to play relevant sound.*/
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

//detecting keyboard press
/*If a keypress was detected then then the function was called passing in event that triggered
the keypress, then event which contains the property called key which tells us which keyboard 
was pressed and then we send to over the the function makeSound*/

        document.addEventListener("keypress",function(event){
            makeSound(event.key);
            buttonAnimation(event.key);
        })
    });
}


function makeSound(key){
    switch(key){
        case "k":
        var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "m":
        var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case "a":
        var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "r":
        var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "h":
        var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "g":
        var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "i":
        var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    default:
        console.log(buttonInnerHTML);
    }
}

function buttonAnimation(CurrentKey){
    var activeButton= document.querySelector("."+CurrentKey);
    activeButton.classList.add("animation");
}
setTimeout(function(){
    activeButton.classList.remove("animation"),1;
});
