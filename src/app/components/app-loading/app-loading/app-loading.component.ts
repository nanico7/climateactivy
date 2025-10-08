import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-cidade',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss']
})
export class LoadingCidadeComponent implements OnInit {
  mensagem = input('Carregando ...');
  constructor() { }

  ngOnInit() {
  }

}