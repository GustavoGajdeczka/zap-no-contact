import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { ZapNoContactComponent } from './zap-no-contact/zap-no-contact.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapNoContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
