const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('ANASAYFA') 
})
app.get('/about', (req, res) => {
    res.status(200).send('HAKKIMIZDA') 
})
app.get('/contact', (req, res) => {
    res.status(200).send('ILETISIM') 
})
app.get('*', (req, res) => {
    res.status(404).send('404 HATA') 
})

app.listen(port, () => {
  console.log(`Sunucu ${port} unda oluşturuldu.`)
})