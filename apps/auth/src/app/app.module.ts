import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        pathMatch: 'full',
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./test/test.module').then((m) => m.TestModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
