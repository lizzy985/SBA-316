Rock-Paper-Scissors Web Application
Overview
This project is a simple web application for playing the game Rock-Paper-Scissors. The game allows users to select their choice of rock, paper, or scissors, and then plays against a computer opponent that makes a random selection. The outcome of each game is displayed along with a tally of the total number of games played and the number of games won by the user.

Features
Dynamic Image Display: The user's and computer's choices are displayed as images.
Interactive Buttons: Users can select their choice by clicking buttons.
Random Computer Choice: The computer makes a random choice each game.
Score Tracking: The application keeps track of the total games played and the number of games won by the user.
Game Outcome Display: The result of each round (win, lose, tie) is displayed.
Requirements Fulfilled
Cache at least one element using getElementById:
The times and wins input elements are cached using getElementById.
Cache at least one element using querySelector or querySelectorAll:
The buttons are cached using querySelectorAll.
Use parent-child-sibling relationship to navigate between elements:
The DOM is navigated to find the img element within the button that was clicked.
Iterate over a collection of elements to accomplish some task:
The collection of buttons is iterated over to attach event listeners.
Create at least one element using createElement:
New li and img elements are created to display the user's and computer's choices.
Use appendChild to add new elements to the DOM:
The newly created li elements are appended to the ul element to display the images.
Modify HTML or text content of at least one element in response to user interaction:
The result of the game is displayed by modifying the text content of the h2 element with id winner.
Modify the style and/or CSS classes of an element in response to user interactions:
The styles of the created img elements are modified to set their size and fit.
Register at least two different event listeners and create the associated event handler functions:
Event listeners are registered for button clicks to handle the user's choice and display the game result.
Include at least one form and/or input with HTML attribute validation:
The times and wins input elements are used to display and update the game statistics.
Include a README file that contains a description of your application:
This README file.
Instructions for Use
Open the application in a web browser.
Select your choice of rock, paper, or scissors by clicking the corresponding button.
The application will display both your choice and the computer's choice.
The result of the game will be displayed along with updated game statistics.
Code Explanation
The core functionality is handled in a JavaScript script included in the HTML file. Here's an overview of the script's main components:

Event Listener Registration: Event listeners are added to the buttons to handle user input.
User Choice Handling: When a button is clicked, the user's choice is determined by the alt attribute of the image within the button.
Computer Choice Generation: The computer's choice is randomly selected from an array of choices.
Image Display: The user's and computer's choices are displayed as images in a ul element.
Winner Determination: The winner of each game is determined based on the rules of Rock-Paper-Scissors, and the result is displayed.
Score Tracking: The total number of games played and the number of games won by the user are tracked and displayed.
Future Enhancements
Given more time, the following enhancements could be made:

Add animations or visual effects to enhance the user experience.
Implement additional game modes or difficulty levels.
Provide a more detailed statistical analysis of the games played.
Improve the styling and layout for better visual appeal.
Reflection
This project demonstrates the practical application of DOM manipulation and event handling in JavaScript. The main challenges included ensuring correct element selection and updating the DOM in response to user interactions. Future projects could benefit from more advanced planning of the user interface and functionality to streamline the development process.