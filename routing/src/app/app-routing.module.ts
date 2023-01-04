import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path: "", redirectTo: '/department-list', pathMatch: 'full'},
  // {path: "", redirectTo: '/departments', pathMatch: 'prefix'},
  {path: "department-list", component: DepartmentListComponent},
  {
    path: "department-list/:id", 
    component:DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  {path: "employees", component: EmployeeListComponent},
  {path: "**", component: PageNotFoundComponent} // should always be the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [DepartmentListComponent, EmployeeListComponent,PageNotFoundComponent, DepartmentDetailComponent,DepartmentOverviewComponent,DepartmentContactComponent]