import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  public departmentID: null | string  = null

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentID = params.get('id')
    })

    // let id: any = Number(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id
  }

  goPrevious() {
    let previous: number = Number(this.departmentID) - 1;
    this.router.navigate(['/departments', previous])
  }

  goNext() {
    let next: number = Number(this.departmentID) + 1;
    this.router.navigate(['/departments', next])
  }

  goBack() {
    let selectedId = this.departmentID ? this.departmentID : null
    this.router.navigate(['/departments', {id: selectedId}])
  }
}
