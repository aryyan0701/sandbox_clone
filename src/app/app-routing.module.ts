import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoOneComponent } from './components/demo-one/demo-one.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent } ,
  { path: 'demo-one', component: DemoOneComponent } ,
  { path: '', redirectTo:'/', pathMatch: 'full' } ,
  { path: '**', redirectTo:'/', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
