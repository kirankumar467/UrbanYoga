import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelToTitleCasePipe } from './pipes/camel-to-title-case.pipe';
import { AttendanceTypePipe } from './pipes/attendance-type.pipe';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotGraphComponent } from './components/plot-graph/plot-graph.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    CamelToTitleCasePipe,
    AttendanceTypePipe,
    PlotGraphComponent
  ],
  imports: [
    CommonModule,
    PlotlyModule
  ],
  exports: [
    CamelToTitleCasePipe,
    AttendanceTypePipe,
    PlotGraphComponent
  ]
})
export class SharedModule { }
