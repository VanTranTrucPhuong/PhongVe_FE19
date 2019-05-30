import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //     // Home
  //     path:"",
  //     loadChildren:"./home/home.module#HomeModule"
  // },
  {
    // Home
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    // Home
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  }

  // Admin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
