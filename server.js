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
    db.Game.findAll({where: {id: req.params.id}}).then(games =>
        res.send(games)
    )
});

app.get('/game/:id/songs', (req, res) => {
    db.Song.findAll({where: {GameId: req.params.id}}).then(songs =>
        res.send(songs)
    )
});

app.get('/song/:id', (req, res) => {
    db.Song.findAll({where: {id: req.params.id}}).then(songs =>
        res.send(songs)
    )
});


app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});
