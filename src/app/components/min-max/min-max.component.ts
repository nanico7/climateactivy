import { Component, input, OnInit } from '@angular/core';
import { Main } from '../../models/weather-response.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-min-max',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss']
})
export class MinMaxComponent implements OnInit {
 main= input<Main | null>(null);
  constructor() { }

  ngOnInit() {
  }

}
