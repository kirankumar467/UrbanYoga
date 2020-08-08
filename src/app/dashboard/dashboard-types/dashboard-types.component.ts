import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-types',
  templateUrl: './dashboard-types.component.html',
  styleUrls: ['./dashboard-types.component.css']
})
export class DashboardTypesComponent implements OnInit {

  dashboardTypes = ['dashboard', 'businessOverview', 'schedule', 'reports'];

  constructor() { }

  ngOnInit(): void {
  }

}
