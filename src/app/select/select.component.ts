import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private gameService: GameService) { }

  getGame(): Game {
    return this.gameService.getGame();
  }

  newGame(hard: boolean): void {
    this.gameService.newGame(hard);
  }

  ngOnInit() {
    this.getGame();
  }

}
