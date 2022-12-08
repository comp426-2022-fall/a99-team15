import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  title = "The dice rolled a: "
  accuracy = "100"
  click() {  
    this.title = this.title.replace(/\d$/, '');
    this.title += this.getRandomInt().toString(); 
    this.accuracy = "50" 

  }
  getRandomInt(): number{
    let decimal =  Math.floor(Math.random() * 7);
    return decimal; 
  }

}

