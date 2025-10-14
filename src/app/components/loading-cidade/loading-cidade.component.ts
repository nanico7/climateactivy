import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-cidade',
  templateUrl: './loading-cidade.component.html',
  styleUrls: ['./loading-cidade.component.scss']
})
export class LoadingCidadeComponent implements OnInit {
  mensagem = input('Carregando ...');
  constructor() { }

  ngOnInit() {
  }

}
