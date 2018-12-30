import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  guess: string;

  constructor(private gameService: GameService) { }

  getGame(): Game {
    return this.gameService.getGame();
  }

  onSubmit(): void {
    this.getGame().addGuess(this.guess);
    this.guess = null;
}

  ngOnInit() {
    this.getGame();
  }

}
