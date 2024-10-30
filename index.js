const express = require('express')
const app = express()
const port = 3000;

const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      platform: 'Nintendo Switch',
      releaseYear: 2017,
    },
    {
      id: 2,
      title: 'God of War',
      genre: 'Action-adventure',
      platform: 'PlayStation 4',
      releaseYear: 2018,
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      genre: 'Role-playing',
      platform: 'PC',
      releaseYear: 2020,
    },
    {
      id: 4,
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: 'PC',
      releaseYear: 2017,
    },
    {
      id: 5,
      title: 'Minecraft',
      genre: 'Sandbox',
      platform: 'Multi-platform',
      releaseYear: 2011,
    },
  ];

app.get('/games', (req, res) => {
  res.json({games:games})
})

app.get('/games/:id', (req, res) => {
    const gameId= parseInt(req.params.id);
    const game = games.find(game=>game.id===gameId);
    if(game){
        res.json({game:game})
    }
    else{
        res.status(404).json({message:"Game not found!"})
    }
    
  })

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})