/*
    program name: Recipe display Application
    Author: Nicholas Howorth
    Date: march 28 2018
    filename: script.js
*/

/* global $ */

//displays the next element after the current target
function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display


//attach event listener to hw elements to invoke display function when clicked
$("h3").click(display);

