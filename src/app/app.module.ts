import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { FormComponent } from './form/form.component';
import { SonComponent } from './form/son/son.component';
import { FormsModule } from '@angular/forms';
import { ActiveComponent } from './active/active.component';
import { ReactiveFormsModule } from '@angular/forms'; //响应式表单

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    FormComponent,
    SonComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
