// Write your code here
import{ gameWon, addTile, gameOver } from './tiles.js';
import { getWord, isInDictionary } from './words.js';

// Grab the input box to get the word that the user types
let inputEl = document.querySelector('input');

// Get a new word when the page is refreshed
let word = getWord();

// testing the process
console.log( word );

// Set a total number of chances as 6
let totalChances = 6;

// We want to get in action when the user presses and releases a key on the keyboard, so we keep monitoring our input box
inputEl.addEventListener( 'keyup', (event) => {
    let keyPressed = event.key;
    let guess = event.target.value.toLowerCase();
    // console.log( keyPressed );
    // console.log( guess );

    // If the user pressed 'Enter' AND if the typed word is 5 characters AND if we still have chances left
    if( keyPressed === 'Enter' && guess.length === 5 && totalChances > 0 ) {
        // console.log( 'todo - check the entered characters against the word' );
        console.log( guess );

        if ( word === guess ) {
            // colleague submitted code for game won function
            gameWon(word);
            // Empty out the input box, not necessary
            event.target.value = '';
            return; //stop execution, exit
        }

        // if word is in dictionary, then...
        // if( isInDictionary( guess )) {

        // trying to get Wordle to accept all entries, regardless of presence in dictionary
        
            // step through the 5 letters one-by-one
            for( let x= 0; x < 5; x++ ) {
                // console.log( x ); // 0, 1, 2, 3, 4
                
                // if the user's character is in the same position
                // as in the chosen word, mark it green
                if (word[x] === guess[x]) {
                    addTile(guess[x], 'green');
                    console.log(guess[x], 'green');
                }
                // if the character is right, but position wrong
                // mark it orange
                else if (word.includes(guess[x])) {
                    addTile(guess[x], 'orange');
                    console.log(guess[x], 'orange');
                }
                // if the character doesn't exist, gray
                else {
                    addTile(guess[x], 'grey');
                    console.log(guess[x], 'grey');
                }
            }
        /* trying to let Wordle Jr manage count without 
            dictionary match
        
        } else { // If totalChances = 0...
            gameOver();
            return;
        } */

        // Empty out the input box, not necessary
        event.target.value = '';

        // With every chance, subtract 1 fom the total 
        // number of available chances until you run out
        totalChances -= 1;

        console.log( totalChances );
        if( totalChances > 0 ) {
            // Update the placeholder with chances left
            document.getElementById("guessword").placeholder = totalChances + " chances left";
            
        } else {
            // Once they've gotten to 0, clear placeholder
            document.getElementById("guessword").placeholder = "";
            gameOver(); // and end the game
            return;
        }

    // If they haven't entered enough characters
    /* } else if( keyPressed === 'Enter' && guess.length < 5 ) { 
        alert( 'Please enter 5 characters' );
        event.target.value = ''; <- may be able to get rid of this with input rules */
/*
    } else if( totalChances < 1 ) { // If totalChances = 0...
        gameOver();
        return; */
    } 
});