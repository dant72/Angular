import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Singer } from '../Singer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingersService {

  private signers: Singer[];

  private _data_url: string = `./assets/singers.json`;
  constructor(private _http: HttpClient) {
    this._http.get<Singer[]>(this._data_url).subscribe(data => this.signers = data);
  }

  public getSingers(): Observable<Singer[]> {
    
    return this._http.get<Singer[]>(this._data_url);
  }

  public getSinger(id: number): Singer {
    
    return this.signers.find(i => i.id == id);
  }
}
