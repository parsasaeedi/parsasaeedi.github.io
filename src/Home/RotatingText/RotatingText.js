import React from "react";

export class RotatingText extends React.Component {
    
    changeWord() {
        var cw = this.wordArray[this.currentWord];
        var nw = this.currentWord == this.words.length-1 ? this.wordArray[0] : this.wordArray[this.currentWord+1];
        for (var i = 0; i < cw.length; i++) {
            this.animateLetterOut(cw, i);
        }
        
        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            this.animateLetterIn(nw, i);
        }
        
        this.currentWord = (this.currentWord == this.wordArray.length-1) ? 0 : this.currentWord+1;
    }

    animateLetterOut(cw, i) {
        setTimeout(function() {
            cw[i].className = 'letter out';
        }, i*80);
    }

    animateLetterIn(nw, i) {
        setTimeout(function() {
                nw[i].className = 'letter in';
        }, 340+(i*80));
    }

    splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }
        
        this.wordArray.push(letters);
    }

    // Rotating Text stuff
    constructor() {
        super();
        this.words = document.getElementsByClassName('word');
        this.wordArray = [];
        this.currentWord = 0;

        this.words[this.currentWord].style.opacity = 1;
        for (var i = 0; i < this.words.length; i++) {
        this.splitLetters(this.words[i]);
        }
        this.changeWord();
        this.setInterval(this.changeWord, 4000);
    }

    render() {
        return (
            <div className="text">
                <p>I make </p>
                <p>
                <span className="word wisteria">websites.</span>
                <span className="word belize">games.</span>
                <span className="word pomegranate">apps.</span>
                </p>
            </div>
        )
    }
}