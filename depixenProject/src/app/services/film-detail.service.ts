import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FilmDetailService {
  pathDetail = "http://www.omdbapi.com/?i=tt3896198&apikey=eec8f05b%20";
  API_KEY = "eec8f05b";
  degisken: any;
  constructor(private httpClient: HttpClient) {}
  getDetail(deger: String) {
    this.degisken =
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`;
    console.log(this.degisken);
    return this.httpClient.get(
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`
    );
  }
  
  
}
