import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  selectId: any;

  department = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "MongoDB"},
    {"id":4, "name": "Ruby"},
    {"id":5, "name": "Bootstrap"},
  ]

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  onSelect(id:number) {
    // this.router.navigate(['/departments', id])
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectId = Number(params.get('id'))
    })
  }

  isSelected(id:number) {
    return id == this.selectId
  }

}
