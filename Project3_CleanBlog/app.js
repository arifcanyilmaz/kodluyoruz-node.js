const express = require('express')
const app = express()
const port = 1920

app.get('/', (req,res) => {
    const blog = { 
        id: 1,
        title: "Blog title", 
        description: "Blog description" 
    }

    res.send(blog)
})

app.listen(port, () =>{
    console.log(`${port}'lu sunucu başarıyla başlatıldı.`)
})