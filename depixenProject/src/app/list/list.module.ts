import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ListRoutingModule } from './list-routing.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    
    CommonModule,
    AppRoutingModule
 
  ]
})
export class ListModule { }
