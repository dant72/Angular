import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Singer } from '../Singer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingersService {

  private _data_url: string = `./assets/singers.json`;
  constructor(private _http: HttpClient) {
    console.log("Here");
  }

  public getSingers(): Observable<Singer[]> {
    
    return this._http.get<Singer[]>(this._data_url);
  }
}
