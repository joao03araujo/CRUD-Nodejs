const express = require('express');

const server = express();

server.use(express.json());

const users = [];

server.post("/users", (req, res) => {
    const { name } = req.body;
    users.push(name);
    return res.json(users);
});

server.get("/users", (req, res) => {
    return res.json(users);
});

server.put("/users/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    users[index] = name;
    return res.json(users);
});

server.delete("/users/:index", (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.json({ message:  "Deletado com sucesso"});
});


server.listen(3000);