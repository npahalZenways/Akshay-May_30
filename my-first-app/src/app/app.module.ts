import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBinding } from "./data-binding/data-binding";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataBinding,
    InBuiltDirectivesComponent 
    // remaining - component, pipes, directives
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
