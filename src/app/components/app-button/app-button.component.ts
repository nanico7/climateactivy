import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
  imports: []
})
export class AppButtonComponent implements OnInit {
  onClick = output<void>();
  constructor() { }

  ngOnInit() {
  }

}
