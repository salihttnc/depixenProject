import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";
import { Observable, throwError, Subject } from "rxjs";

import { FilmDetailService } from "./film-detail.service";
@Injectable({
  providedIn: "root"
})
export class FilmService {
  constructor(private httpClient: HttpClient) {}

  API_KEY = "eec8f05b";

  public getNews() {
    return this.httpClient.get(
      `http://www.omdbapi.com/?s=game&type=movie&page=1&apikey=${this.API_KEY}`
    );
  }
  degisken: any;
  private subject = new Subject<any>();

  sendMessage(message: string) {
 
    this.subject.next({ text: message });
    
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  getDetail(deger) {
    console.log(deger);
    this.degisken =
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`;
    console.log(this.degisken);
    return this.httpClient.get(
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`
    );
  }
  getAuthToken(): string {
    return "TOKEN-ABCDEFG";
  }
}
