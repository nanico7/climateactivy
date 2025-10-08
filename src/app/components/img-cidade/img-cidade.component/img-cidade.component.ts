import { TitleCasePipe } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { Weather } from '../../../models/weather-response.model';

@Component({
  selector: 'app-img-cidade',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './img-cidade.component.html',
  styleUrls: ['./img-cidade.component.scss']
})
export class ImgTituloComponent implements OnInit {
 clima= input<Weather | null>(null);

  constructor() { }

  ngOnInit() {
  }

}