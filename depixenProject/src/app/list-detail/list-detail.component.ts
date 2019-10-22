import { Component, OnInit } from "@angular/core";
import { FilmDetailService } from "../services/film-detail.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FilmService } from '../services/film.service';

@Component({
  selector: "app-list-detail",
  templateUrl: "./list-detail.component.html",
  styleUrls: ["./list-detail.component.css"]
})
export class ListDetailComponent implements OnInit {
  constructor(
    private service: FilmDetailService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService:FilmService,private apiService3: FilmService
  ) {}
  title = "asdasd";
  films;
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.service.getDetail((this.films = data["imdbID"])).subscribe(data => {
        this.films = data;
      });
    });
  }
  sendMessage(deger:string): void {
    // send message to subscribers via observable subject
    
    this.apiService3.sendMessage(deger);
}
}
