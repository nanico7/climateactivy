import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { Weather, WeatherResponse } from '../../models/weather-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, OperatorFunction } from 'rxjs';
import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { NomeCidadeComponent } from "src/app/components/nome-cidade/nome-cidade.component"; 

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [DecimalPipe, TitleCasePipe, NomeCidadeComponent],
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent  {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError( err => {
        console.error('Erro ao buscar dados do clima:', err);
        return of(null)
      })
    ),
    { initialValue: null }
  );

  constructor() { }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}

function pipe(arg0: OperatorFunction<unknown, unknown>): NoInfer<import("@angular/core/rxjs-interop").ToSignalOptions<WeatherResponse | null | undefined>> & { initialValue?: undefined; requireSync?: false; } {
  throw new Error('Function not implemented.');
}