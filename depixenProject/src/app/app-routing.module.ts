import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListDetailComponent } from "./list-detail/list-detail.component";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ListDetailModule } from './list-detail/list-detail.module';

const routes: Routes = [
  
  { path: 'list', component:ListComponent },
  { path: 'list/detail/:imdbID', component:ListDetailComponent},
  { path: 'list/detail/:imdbID', loadChildren: './list/list.module#ListModule'},
  { path: 'list', loadChildren: './list-detail/list-detail.module#ListDetailModule'},
  { path:'',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
