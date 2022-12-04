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
import { NgSwitchDirectiveComponent } from './components/ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './components/ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ChildComponentComponent } from './components/component-interaction/child-component/child-component.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployeeListComponent } from './components/services/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/services/employee-detail/employee-detail.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemRefVairComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ComponentInteractionComponent,
    ChildComponentComponent,
    PipesComponent,
    ServicesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
