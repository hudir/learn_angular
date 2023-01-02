import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  public departmentID: string | null = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.departmentID = params.get('id')
    })
  }

}
