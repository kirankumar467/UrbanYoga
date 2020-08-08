import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessOverview } from '../../interfaces/business-overview';
import { of } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

@Injectable()
export class BusinessOverviewService {

  private businessOverviewUrl = 'http://localhost:8081/businessoverview/details';

  constructor(private http: HttpClient) { }

  businessOverviewDetails$ = this.http.get<BusinessOverview[]>(this.businessOverviewUrl)
    .pipe(
      timeout(3000),
      catchError(err => this.handleError(err))
    );

  handleError = (err: any) => {
    return of([] as BusinessOverview[]);
  }
}
