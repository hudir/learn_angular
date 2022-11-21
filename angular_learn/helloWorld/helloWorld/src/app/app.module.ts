import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemRefVairComponent } from './components/tem-ref-vair/tem-ref-vair.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemRefVairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
