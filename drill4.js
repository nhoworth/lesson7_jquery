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


//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and snimates the next element after the current targer
function display2(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display 2
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers
$("h3").hover(function(){
    $(this).css("background-color","blue");
    }, function(){
    $(this).css("background-color","pink");
    
});

//hover() will trigger diplay2 method ea time mouse hovers over header
$("h3").hover(display2);