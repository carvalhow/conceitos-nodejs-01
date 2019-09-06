const express = require("express");
const server = express();
server.use(express.json());
server.listen(3001);

const projects = [];

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
server.put("/projects/:id", (req, res) => {
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
server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  projects.filter(d => {
    if (d.id == id) {
      projects.splice(projects.indexOf(d), 1);
    }
  });

  return res.send();
});

//Create Tasks
server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { project } = projects.find(d => d.id == id);

  projects.task.push(title);

  return res.json(project);
});
