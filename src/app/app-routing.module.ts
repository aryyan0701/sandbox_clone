import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoThreeComponent } from './components/demo-three/demo-three.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent } ,
  { path: 'demo-three', component: DemoThreeComponent } ,
  { path: '', redirectTo:'/', pathMatch: 'full' } ,
  { path: '**', redirectTo:'/', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
