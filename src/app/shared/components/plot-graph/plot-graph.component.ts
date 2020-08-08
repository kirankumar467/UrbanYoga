import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-plot-graph',
  templateUrl: './plot-graph.component.html',
  styleUrls: ['./plot-graph.component.css']
})
export class PlotGraphComponent implements OnInit, AfterViewInit {

  @Input() type: string;
  @Input() mode: string;
  @Input() x: [];
  @Input() y: [];
  public graph = {
    data: [
        { x: [], y: [], type: 'bar', mode: 'bar' },
    ],
    layout: {autosize: true}
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.graph.data[0].type = this.type;
    this.graph.data[0].mode = this.mode;
    this.graph.data[0].x = this.x;
    this.graph.data[0].y = this.y;
  }

}
