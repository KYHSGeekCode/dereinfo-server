const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./models/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/*+json'}));

const jsonParser = bodyParser.json();

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

app.get('/song/:id/:difficulty', (req, res) => {
    db.Sheet.findAll({where: {SongId: req.params.id, DifficultyId: req.params.difficulty}}).then(sheet =>
        res.send(sheet)
    )
});

app.post('/song', jsonParser, (req, res) => {
    db.Game.findAll({where: {name: req.body.game}}).then(game => {
        db.Song.create({
            name: req.body.name,
            active: false,
            metadata: req.body.metadata,
            GameId: game[0]['id']
        }).then(song =>
            res.send("" + song.id)
        )
    })
});

app.post('/sheet', jsonParser, (req, res) => {
    db.Difficulty.findAll({where: {name: req.body.difficulty}}).then(difficulty => {
        db.Sheet.create({
            data: req.body.data,
            active: false,
            DifficultyId: difficulty[0].id,
            SongId: req.body.SongId
        }).then(sheet =>
            res.send("" + sheet.id)
        )
    })
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});
