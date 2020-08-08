import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { BusinessOverview } from 'src/app/interfaces/business-overview';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css']
})
export class SalesDetailsComponent implements OnInit, AfterViewInit {

  @Input() businessOverview: BusinessOverview;
  xAxiesDetails = [];
  yAxiesDetails = [];

  constructor() { }

  ngOnInit(): void {
    this.prepareGraphDetails();
  }

  ngAfterViewInit(): void {
    this.prepareGraphDetails();
  }

  prepareGraphDetails = () => {
    this.businessOverview.packages.forEach((packageDetails, index) => {
      const { sales } = packageDetails;
      this.xAxiesDetails[index] = sales.map(value => value.month);
      this.yAxiesDetails[index] = sales.map(value => value.amount);
    });
  }

  display = (displayMore: boolean) => {
    this.businessOverview.displayMore = !displayMore;
  }

}
