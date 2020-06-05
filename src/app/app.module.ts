import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//追加
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // 追加
    ReactiveFormsModule // 追加
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule { }
