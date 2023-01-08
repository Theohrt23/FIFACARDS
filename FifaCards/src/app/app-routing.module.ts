import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsInfoComponent } from './cards-info/cards-info.component';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  { path: 'list', component: CardsListComponent },
  { path: 'info', component: CardsInfoComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
