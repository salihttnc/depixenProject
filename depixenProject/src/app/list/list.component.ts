import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { FilmService } from "../services/film.service";
import { FilmDetailService } from "../services/film-detail.service";

declare var $: any;

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  title = "depixenProject";
  degiskens;
  films;
  details;
  filmLast1;
  API_KEY = "eec8f05b";
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
  ) {}

  deger;
  msgList;
  products: any[] = [];
  ngOnInit() {
    this.apiService.getNews().subscribe(data => {
      this.films = data["Search"];
    });
    this.subscription = this.apiService2.getMessage().subscribe(message => {
      this.getDetail(message.text).subscribe(data => {
        console.log(data["Title"]);
        this.filmLast1 = data;
        if(document.getElementById("lastMovie")!=null)
        {
          document.getElementById("lastMovie").remove();
        }
        var x = document.getElementById("container");
        var html =
          "<div id='lastMovie' class=' card productbox ' style=' width: 18rem;'><img src='" +
          this.filmLast1["Poster"] +
          "' width='250' height='350' class='card-img-top' alt='...' /><div class='card-body'><h5 class='card-title'>"+this.filmLast1['Title']+"</h5><p class='card-text'>"+this.filmLast1['Year']+"</p><p class='card-text'>"+this.filmLast1['imdbID']+"</p><p>"+this.filmLast1['Type']+"</p></div></div>";
        x.insertAdjacentHTML("afterbegin", html);
        
        console.log(this.filmLast1);
      });
    });
  }

  degisken: any;
  getDetail(deger) {
    console.log(deger);
    this.degisken =
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`;
    console.log("1" + this.degisken);
    return this.httpClient.get(
      ` http://www.omdbapi.com/?i=` + deger + `&apikey=${this.API_KEY}%20`
    );
  }
}
