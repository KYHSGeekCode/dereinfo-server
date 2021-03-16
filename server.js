const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./models/index.js');

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.get('/game', (req, res) => {
    const games = db.Game.findAll().then(games =>
        res.send(games)
    )
});

app.get('/game/:id', (req, res) => {
    const games = db.Game.findAll({where: {id: req.params.id}}).then(games =>
        res.send(games)
    )
});


app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});
