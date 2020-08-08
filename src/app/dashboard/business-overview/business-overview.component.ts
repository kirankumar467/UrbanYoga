import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusinessOverviewService } from '../services/business-overview.service';
import { BusinessOverview } from '../../interfaces/business-overview';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.component.html',
  styleUrls: ['./business-overview.component.css']
})
export class BusinessOverviewComponent implements OnInit, OnDestroy {

  displayMore = true;
  businessOverview: BusinessOverview[];
  private businessOverviewSubscription: Subscription;

  constructor(private businessOverviewService: BusinessOverviewService) { }

  ngOnInit(): void {
    this.businessOverviewSubscription = this.businessOverviewService.businessOverviewDetails$.subscribe(
      businessOverview => {
        this.businessOverview = businessOverview.map(overview => {
          const today = new Date();
          const currMonth = today.toLocaleString('default', { month: 'short' });
          let amount = 0;
          const { name, attendance } = overview;
          let { packages } = overview;
          packages = packages.map(packageDetails => {
            let { sales } = packageDetails;
            sales = sales.filter(sale => sale.month === currMonth);
            amount += sales.reduce((acc, curr) => {
              return acc + curr.amount;
            }, 0);
            return { name: packageDetails.name, sales};
          });
          const currentMonthOverview = { name, attendance, packages };
          const currentMonthAmount = amount;
          return { ...overview, displayMore: true, currentMonthOverview, currentMonthAmount };
        });
      }
    );
  }

  display = (businessOverview: BusinessOverview) => {
    businessOverview.displayMore = !businessOverview.displayMore;
  }

  ngOnDestroy(): void {
    if (this.businessOverviewSubscription) {
      this.businessOverviewSubscription.unsubscribe();
    }
  }

}
