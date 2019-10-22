import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailComponent } from './list-detail.component';
import { AppModule } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {  ListDetailRoutingModule } from './list-detail-routing.module';



@NgModule({
  declarations: [ListDetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
  
})
export class ListDetailModule { }
 