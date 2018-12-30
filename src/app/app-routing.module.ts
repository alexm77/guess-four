import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SelectComponent } from './select/select.component';
import { MainGuard } from './main/main.guard';
import { WinComponent } from './win/win.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'guess-four', component: MainComponent, canActivate: [MainGuard] },
  { path: 'start', component: SelectComponent },
  { path: 'win', component: WinComponent },
  { path: '**', redirectTo: '/start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
