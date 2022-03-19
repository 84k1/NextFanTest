import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ICards } from 'src/app/_interfaces/cards';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = "../assets/data/cards.json";

  constructor(
    private http: HttpClient
  ) {}


  getCards(): Observable<ICards[]> {
    return this.http.get<ICards[]>(this._url)
  }

}
