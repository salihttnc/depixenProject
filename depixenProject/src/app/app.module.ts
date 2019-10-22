import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ListDetailModule } from "./list-detail/list-detail.module";

import { ListModule } from "./list/list.module";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListDetailModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
//
