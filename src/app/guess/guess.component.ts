import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {
  @Input() guess: number;

  ngOnInit() {
  }

}
