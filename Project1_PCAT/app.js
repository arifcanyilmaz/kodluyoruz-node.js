const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req,res) => {
    const photo = {
        id: 1,
        name: "photo name",
        description: "photo description"
    }
    //res.send(200,'<h1>Anasayfaya Hos Geldiniz</h1>')
    res.send(photo)
})


app.listen(port, () => {
  console.log(`Localhost ${port} portunda başarıyla başlatıldı.`);
});
