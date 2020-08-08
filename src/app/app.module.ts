import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { NotFoudComponent } from './not-foud/not-foud.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkInProgressComponent,
    NotFoudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
