import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { BusinessOverviewService } from './services/business-overview.service';
import { DashboardTypesComponent } from './dashboard-types/dashboard-types.component';
import { BusinessOverviewComponent } from './business-overview/business-overview.component';
import { SalesDetailsComponent } from './business-overview/sales-details/sales-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'businessOverview', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'businessOverview', component: BusinessOverviewComponent },
  { path: 'schedule', redirectTo: '/WIP' },
  { path: 'reports', redirectTo: '/WIP' },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTypesComponent,
    BusinessOverviewComponent,
    SalesDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    BusinessOverviewService
  ]
})
export class DashboardModule { }
