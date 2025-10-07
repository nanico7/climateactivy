import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nome-cidade',
  standalone: true,
  imports: [],
  templateUrl: './nome-cidade.component.html',
  styleUrls: ['./nome-cidade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NomeCidadeComponent { }
