import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carregando',
  standalone: true,
  imports: [],
  templateUrl: './carregando-component.html',
  styleUrls: ['./carregando-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarregandoComponent {

  mensagem = input<string>('Carregando . . .');
}