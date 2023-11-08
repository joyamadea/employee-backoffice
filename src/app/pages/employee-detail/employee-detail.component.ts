import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  dummy: any;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.dummy = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/employee');;
  }
}
