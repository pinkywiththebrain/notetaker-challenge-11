const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');



router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
        res.send(data)
    })
});

router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
        const notes = JSON.parse(data)
        notes.push({...req.body, id:uniqid()})
        fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
            res.send(req.body)
        })
        
    })
});

router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
        const notes = JSON.parse(data)
        const filteredNotes = notes.filter(function(note){
            return note.id !== req.params.id
        })
        fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), function(err) {
            res.send(req.body)
        })
        
    })
});

module.exports = router;