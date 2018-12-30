import { Component } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guess-four';

  constructor(private gameService: GameService) { }

  getGame(): Game {
    return this.gameService.getGame();
  }
}
