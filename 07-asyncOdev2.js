const games = [
    {name: 'CS2', player: 'Xantares'},
    {name: 'League Of Legends', player: 'Naru'},
    {name: 'FIFA', player: 'Riv9'}
]

const listGames = () => {
    games.map(game =>{
        console.log(game)
    })
}

const addGames = (newgame) => {
    const promise = new Promise((resolve,reject) =>{
        games.push(newgame)
        resolve(games)
        reject('HATA! Oyun/Oyuncu Eklenemedi.')
    })
    return promise 
}

async function showGame(item1,callback) {
    try{
        await addGames(item1)
        callback()
        //listGames()
    }catch(err){
        console.log(err)
    }
    
}

showGame({name: 'Minecraft', player: 'Arif'})
showGame({name: 'World Of Warcraft', player: 'Muzaffer'})
showGame({name: 'Quake', player: 'Ahmet'},listGames) 



