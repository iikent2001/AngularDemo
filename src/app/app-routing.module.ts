import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SmInsertComponent } from './sm-insert/sm-insert.component';
import { SmSearchComponent } from './sm-search/sm-search.component';
import { SmUpdateComponent } from './sm-insert/sm-update.component';


const routes: Routes = [
  {path:"insertSM",component:SmInsertComponent},
  {path:"searchSM/updateSM/:seq",component:SmUpdateComponent},
  {path:"searchSM",component:SmSearchComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
