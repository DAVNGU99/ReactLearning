// server.js
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom CORS middleware
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Or replace * with your frontend origin
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running on port 8000");
});
