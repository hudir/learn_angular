import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemRefVairComponent } from './components/tem-ref-vair/tem-ref-vair.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NgIfDirectiveComponent } from './components/ng-if-directive/ng-if-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemRefVairComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
