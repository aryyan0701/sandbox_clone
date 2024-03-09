import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoThreeComponent } from './components/demo-three/demo-three.component';

const routes: Routes = [
  
  { path: 'demo-three', component: DemoThreeComponent } ,
  { path: '', redirectTo:'/', pathMatch: 'full' } ,
  { path: '**', redirectTo:'/', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
