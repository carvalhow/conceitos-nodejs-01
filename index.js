const express = require("express");
const server = express();
server.use(express.json());
server.listen(3001);

const projects = [];

server.post("/projects", (req, res) => {
  const project = req.body;

  projects.push(project);

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});
