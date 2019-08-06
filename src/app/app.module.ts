import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppDropdown } from './app.dropdown';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, AppDropdown],
  bootstrap: [AppComponent]
})
export class AppModule { }