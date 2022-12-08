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
  yourGuess = "Your guess was a: "
  correctness = ""
  title = "The dice rolled a: "
  accuracy = "__"
  click() {
    console.log(this.gameForm.value.guess);
    this.yourGuess = this.yourGuess.replace(/\d$/, '');
    this.yourGuess += this.gameForm.value.guess;
    this.title = this.title.replace(/\d$/, '');
    this.diceRollNum = this.getRandomInt().toString();
    this.title += this.diceRollNum;
    if (this.diceRollNum == this.gameForm.value.guess) {
      this.correctness = "Correct!";
      console.log('correct!');
    }
    else {
      this.correctness = "Wrong. Try Again!"
    }
  }
  getRandomInt(): number {
    let decimal = Math.floor(Math.random() * 6 + 1);
    return decimal;
  }

}

