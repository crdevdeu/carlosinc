import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'test',
    loadChildren: () => import('auth/Module').then((m) => m.TestModule),
  },

  // {
  //   path: '**',
  //   component: AppComponent,
  // },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
