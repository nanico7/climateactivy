import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../services/open-weather.service';
import { WeatherResponse } from '../../models/weather-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { DecimalPipe } from '@angular/common';

// Componentes
import { NomeCidadeComponent } from '../../components/nome-cidade/nome-cidade.component';
import { TemperaturaComponent } from '../../components/temperatura/temperatura.component';
import { CarregandoComponent } from '../../components/carregando/carregando.component';
import { ImgTituloComponent } from '../../components/img-titulo/img-titulo.component';
import { TemperaturaMinMaxComponent } from '../../components/temperatura-min-max/temperatura-min-max.component';
import { ButtonComponent } from '../../components/app-button/app-button.component';

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [
    DecimalPipe,
    NomeCidadeComponent,
    TemperaturaComponent,
    CarregandoComponent,
    ImgTituloComponent,
    TemperaturaMinMaxComponent,
    ButtonComponent
  ],
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);

  // Cria um sinal reativo com os dados do clima
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual().pipe(
      catchError(err => {
        console.error('Erro ao buscar dados do clima:', err);
        return of(null);
      })
    ),
    { initialValue: null }
  );

  mensagemCarregando: string = 'Carregando temperatura';

  constructor() {}

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
    this.mensagemCarregando = 'Carregando temperatura da cidade';
  }
}
