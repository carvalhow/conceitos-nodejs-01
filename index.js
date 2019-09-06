const express = require("express");
const server = express();
server.use(express.json());
server.listen(3001);

const projects = [];

//Create
server.post("/projects", (req, res) => {
  const project = req.body;

  projects.push(project);

  return res.json(projects);
});

//Read
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//Update
server.put("/projects/:id", (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.title;

  projects.filter(d => {
    if (d.id == id) {
      d.title = newTitle;
    }
  });

  return res.json(projects);
});

//Delete
server.delete("/projects/:id", (req, res) => {
  const id = req.params.id;

  projects.filter(d => {
    if (d.id == id) {
      projects.splice(projects.indexOf(d), 1);
    }
  });

  return res.json(projects);
});
