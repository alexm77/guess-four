import { Injectable } from '@angular/core';
import { Game } from './game';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game: Game;

  constructor(private router: Router) { }

  newGame(hard: boolean): void {
    this.game = new Game(hard, this.router);
  }

  getGame(): Game {
    return this.game;
  }
}
