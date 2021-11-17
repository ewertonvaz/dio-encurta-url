# dio-encurta-url

Projeto de um encurtador de URL para cumrprir tarefa do bootcampo Eduzz/DIO.

---

## Backend

Para inciar o backend entrar na pasta /backend/docker e, usando um shell, digitar o comando:

```
docker-compose up -d
```

Após a incialização do container estarão disponíveis os seguintes serviços:

**API**: http://localhost:5000

**Mongo Expres**s: http://localhost:8081

## Frontend

Entrar na pasta /frontend e usar o comando:

```
yarn start
```

## Observações

Para validar o form não usei nenhuma biblioteca, pois ele contém somente um campo e neste caso bastou usar uma Regex que checa se o valor do input é uma URL válida.

Fiz a validação do frontend, pois o backend ainda não está validando a URL original que é enviada.

O recomendável é que o backend também faça esta validação, mas ficará para uma implementação futura.



