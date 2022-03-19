import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/_services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public cards = [];

  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.service.getCards().subscribe((data: any) => {
      this.cards = data;
      console.log(this.cards)
    }, (error: any) => {
      console.log(error);
    });
  }

}
