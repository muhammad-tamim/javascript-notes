const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Joe Root", score: 72 },
    { name: "Babar Azam", score: 101 },
    { name: "Kane Williamson", score: 54 },
    { name: "Steve Smith", score: 38 }
];

const bestScorer = players.reduce((bestPlayer, player) => {
    if (bestPlayer.score > player.score) return bestPlayer
    return player
}, players[0])

console.log(bestScorer) // { name: 'Babar Azam', score: 101 }