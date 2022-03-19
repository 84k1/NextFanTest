import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICards } from "src/app/_interfaces/cards"

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements OnInit, AfterViewInit {

  @Input('inputCards')
  inputCards!: any[];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.inputCards = this.inputCards.sort(function(a,b){
      return new Date(b.dates).getTime() - new Date(a.dates).getTime();
    });
    console.log('Sorted list', this.inputCards)

  }

}
