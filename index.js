const express = require("express");
const server = express();
server.use(express.json());

const projects = [];
let numberReqs = 0;

function validarIdExistente(req, res, next) {
  const projeto = projects.find(d => d.id == req.params.id);

  if (projeto) {
    return next();
  }

  return res.status(400).json({ error: "ID inexistente" });
}

function countReqs(req, res, next) {
  numberReqs++;
  console.log(`Requisições: ${numberReqs}`);
  return next();
}

server.use(countReqs);

//Create
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

//Read
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//Update
server.put("/projects/:id", validarIdExistente, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.filter(d => {
    if (d.id == id) {
      d.title = newTitle;
    }
  });

  return res.json(projects);
});

//Delete
server.delete("/projects/:id", validarIdExistente, (req, res) => {
  const { id } = req.params;

  projects.filter(d => {
    if (d.id == id) {
      projects.splice(projects.indexOf(d), 1);
    }
  });

  return res.send();
});

//Create Tasks
server.post("/projects/:id/tasks", validarIdExistente, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(d => d.id == id);

  project.tasks.push(title);
  return res.json(project);
});

server.listen(3001);
