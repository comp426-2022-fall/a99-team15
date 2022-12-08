import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  public diceRollNum: string = '';
  gameForm = this.formBuilder.group({
    guess: ''
  })
  constructor(
    private formBuilder: FormBuilder,
  ) {

  }
  counter = 0;
  numberCorrect = 0;
  yourGuess = "Your guess was a: "
  correctness = ""
  title = "The dice rolled a: "
  accuracy = 100
  numCorrectTitle = 0;

  click() {
    this.counter += 1;
    console.log(this.gameForm.value.guess);
    this.yourGuess = this.yourGuess.replace(/\d$/, '');
    this.yourGuess += this.gameForm.value.guess;
    this.title = this.title.replace(/\d$/, '');
    this.diceRollNum = this.getRandomInt().toString();
    this.title += this.diceRollNum;
    if (this.diceRollNum == this.gameForm.value.guess) {
      this.correctness = "Correct!";
      console.log('correct!');
      this.numberCorrect += 1;
    }
    else {
      this.correctness = "Wrong. Try Again!"
    }
    this.accuracy = Math.floor((this.numberCorrect / this.counter) * 100);
  }
  getRandomInt(): number {
    let decimal = Math.floor(Math.random() * 6 + 1);
    return decimal;
  }

}

