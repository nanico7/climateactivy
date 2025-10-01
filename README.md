<<<<<<< HEAD
# Clima Tempo

App de clima minimalista com ícones arredondados. Mostra temperatura atual, sensação térmica e condição com imagem, detecta sua localização e permite buscar qualquer cidade/estado/país.

## Tecnologias
- React + Vite
- Axios
- OpenWeather API (Current Weather)

## Pré-requisitos
- Node 18+
- Uma chave da API OpenWeather: https://home.openweathermap.org/api_keys

## Configuração
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` na raiz do projeto (baseado em `.env.example`):
   ```env
   VITE_OPENWEATHER_API_KEY=COLOQUE_SUA_CHAVE_AQUI
   ```

## Executar em desenvolvimento
```bash
npm run dev
```
Abra o endereço mostrado (geralmente http://localhost:5173).

## Uso
- O app tenta usar sua geolocalização ao abrir. Se falhar, usa "São Paulo, BR" como padrão.
- Use a busca para digitar: "cidade", "cidade, estado", ou "cidade, estado, país" (por exemplo: `Porto Alegre, RS, BR` ou `Paris, FR`).

## Personalização
- Estilos em `src/styles.css`.
- Ícones em `src/icons/WeatherIcons.jsx`.
- Cartão em `src/components/WeatherCard.jsx`.

## Produção
```bash
npm run build
npm run preview
```

## Licença
MIT
=======
# AtividadeClima

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> bd0030b (commit)
