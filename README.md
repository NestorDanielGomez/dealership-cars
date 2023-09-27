## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Uso de DTOS , clases que sirver para transportar de un punto a otro.. en este caso de un controlador a un servicio.
Uso de Controllers:
Controlan rutas, son los encargados de escuchar la
solicitud y emitir una respuesta.

Uso de PIPEs Transformar la data recibida en requests, para
asegurar un tipo, valor o instancia de un objeto.

ValidationPipe - Class Validator + Class Transformer

Configuración global de pipes (whitelist: true,
forbidNonWhitelisted: true,)

whiteList: Remueve todo lo que no está
incluído en los DTOs
forbidNonWhiteListed: Retorna bad request
si hay propiedades en el objeto no requeridas

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
