import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: FrontPageComponent
  },
  {
    path: 'examples',
    component: ExamplePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
