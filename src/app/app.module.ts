import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule ],
  bootstrap: [AppComponent],
})
export class AppModule {}
