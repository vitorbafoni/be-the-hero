const express = require('express');
const cors = require("cors");
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 *  Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtos, paginação)
  * localhost:3333/users?name=Vitor
  * localhost:3333/users?page=2&nome=Vitor&idade=29
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * exemplo: app.get('/users/:id', (request, response)
  * localhost:3333/users/1
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

module.exports = app;