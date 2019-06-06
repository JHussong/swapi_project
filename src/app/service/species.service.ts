import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private _http: HttpClient) { }

  speciesFetch(searchValue: string) : Observable<any> {
    return this._http.get<any>(`https://swapi.co/api/species/?search=${searchValue}`)
  }
}