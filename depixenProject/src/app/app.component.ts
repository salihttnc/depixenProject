import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";

import { ActivatedRoute } from "@angular/router";
import { FilmService } from "./services/film.service";

import { FilmDetailService } from "./services/film-detail.service";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { map } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, HttpInterceptor {
  title = "depixenProject";

  films;
  details;
  filmLast;
  data$: Observable<any>;
  messages: any[] = [];

  subscription: Subscription;
  constructor(
    private apiService: FilmService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private service: FilmDetailService,
    private router: Router,
    private apiService2: FilmService,
    private apiService4: FilmService,
    private httpClient: HttpClient
    ,private loginService:FilmService
  ) {
    // subscribe to home component messages
    
  }
  API_KEY = "eec8f05b";
  deger;
  msgList;products: any[] = [];
  ngOnInit() {
    this.apiService.getNews().subscribe(data => {
      console.log(data);
      this.films = data["Search"];
    });
    this.subscription = this.apiService2.getMessage().subscribe(message => {
      if (message) {
      
        this.getDetail(message.text).subscribe(data=>{
          this.filmLast=data[""]
        })
          
      
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR');
    const token = this.loginService.getAuthToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('authtoken', token);
    }
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq).pipe(
      map(resp => {
        if (resp instanceof HttpResponse) {
          console.log(resp);
          return  resp.clone({ body: [{title: 'Replaced data in interceptor'}] });
        }
      })
    );
  }
  degisken: any;
  getDetail(deger) {
    console.log(deger);
    this.degisken =
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`;
    console.log(this.degisken);
    return this.httpClient.get(
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`
    );
  }
}
