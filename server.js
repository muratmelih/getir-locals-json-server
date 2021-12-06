const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3003;

server.use(middlewares);
server.use(router);
server.use(cors);
server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
