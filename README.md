Rock-Paper-Scissors Web Application
====
Overview
-------
This project is a simple web application for playing the game Rock-Paper-Scissors. The game allows users to select their choice of rock, paper, or scissors, and then plays against a computer opponent that makes a random selection. The outcome of each game is displayed along with a tally of the total number of games played and the number of games won by the user.

Features
-------
* #### Dynamic Image Display:
    The user's and computer's choices are displayed as images.<br> 
* #### Interactive Buttons:
    Users can select their choice by clicking buttons.<br> 
* #### Random Computer Choice:
    The computer makes a random choice each game.<br> 
* #### Score Tracking:
    The application keeps track of the total games played and the number of games won by the user.<br> 
* #### Game Outcome Display:
    The result of each round (win, lose, tie) is displayed.<br> 

Requirements Fulfilled
-------
* #### Cache at least one element using getElementById:
    The times and wins input elements are cached using getElementById.<br> 
* #### Cache at least one element using querySelector or querySelectorAll:
    The buttons are cached using querySelectorAll.<br> 
* #### Use parent-child-sibling relationship to navigate between elements:
    The DOM is navigated to find the img element within the button that was clicked.<br> 
* #### Iterate over a collection of elements to accomplish some task:
    The collection of buttons is iterated over to attach event listeners.<br> 
* #### Create at least one element using createElement:
    New li and img elements are created to display the user's and computer's choices.<br> 
* #### Use appendChild to add new elements to the DOM:
    The newly created li elements are appended to the ul element to display the images.<br> 
* #### Modify HTML or text content of at least one element in response to user interaction:
    The result of the game is displayed by modifying the text content of the h2 element with id winner.<br> 
* #### Modify the style and/or CSS classes of an element in response to user interactions:
    The styles of the created img elements are modified to set their size and fit.<br> 
* #### Register at least two different event listeners and create the associated event handler functions:
    Event listeners are registered for button clicks to handle the user's choice and display the game result.<br> 
* #### Include at least one form and/or input with HTML attribute validation:
    The times and wins input elements are used to display and update the game statistics.<br> 
* #### Include a README file that contains a description of your application:
    This README file.<br> 

Instructions for Use
-------
* Open the application in a web browser.<br> 
* Select your choice of rock, paper, or scissors by clicking the corresponding button.<br> 
* The application will display both your choice and the computer's choice.<br> 
* The result of the game will be displayed along with updated game statistics.<br> 

Code Explanation
-------
The core functionality is handled in a JavaScript script included in the HTML file. Here's an overview of the script's main components:<br> 

* Event Listener Registration: Event listeners are added to the buttons to handle user input.<br> 
* User Choice Handling: When a button is clicked, the user's choice is determined by the alt attribute of the image within the button.<br> 
* Computer Choice Generation: The computer's choice is randomly selected from an array of choices.<br> 
* Image Display: The user's and computer's choices are displayed as images in a ul element.<br> 
* Winner Determination: The winner of each game is determined based on the rules of Rock-Paper-Scissors, and the result is displayed.<br> 
* Score Tracking: The total number of games played and the number of games won by the user are tracked and displayed.<br> 

Reflection
-------
This project demonstrates the practical application of DOM manipulation and event handling in JavaScript. The main challenges included ensuring correct element selection and updating the DOM in response to user interactions. Future projects could benefit from more advanced planning of the user interface and functionality to streamline the development process.
