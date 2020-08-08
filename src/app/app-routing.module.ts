import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoudComponent } from './not-foud/not-foud.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'signIn', component: WorkInProgressComponent },
  { path: 'classes', component: WorkInProgressComponent },
  { path: 'workshops', component: WorkInProgressComponent },
  { path: 'appointments', component: WorkInProgressComponent },
  { path: 'clientHome', component: WorkInProgressComponent },
  { path: 'retail', component: WorkInProgressComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '404', component: NotFoudComponent },
  { path: 'WIP', component: WorkInProgressComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
