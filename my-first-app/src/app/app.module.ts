import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBinding } from "./data-binding/data-binding";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { FormsModule } from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServiceUserComponent } from './service-user/service-user.component';
import { MyService } from './services/my-first-service';
import { DirectiveUserComponent } from './directive-user/directive-user.component';
import { MyDirective } from './directive/my-directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBinding,
    InBuiltDirectivesComponent,
    ParentComponent,
    ChildComponent,
    ServiceUserComponent,
    DirectiveUserComponent,
    MyDirective
    // remaining - component, pipes, directives
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
