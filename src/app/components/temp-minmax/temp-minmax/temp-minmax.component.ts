import { Component, input, OnInit } from '@angular/core';
import { Main } from '../../models/weather-response.component.ts';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-min-max',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './temp-minmax.component.html',
  styleUrls: ['./temp-minmax.component.scss']
})
export class TempMinmaxComponent implements OnInit {
  main = input<Main | null>(null);
  constructor() { }

  ngOnInit() {
  }

}