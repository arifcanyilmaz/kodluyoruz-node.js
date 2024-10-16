const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo name',
    desc: 'Photo description',
  };
  res.send(photo);
});


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port}'de baslatildi..`);
});