import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public cards = [];
  private _url: string = "../assets/data/cards.json";

  constructor(
    private service: ApiService,
    private http: HttpClient

  ) { }

  ngOnInit() {
    new Promise((resolve, reject) => {
      this.http.get(this._url).toPromise().then((res: any) => {
        this.cards = res;
        resolve('success');
      },
      msg => {
        reject(msg);
      })
    });

  }
}
