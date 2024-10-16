const Koa = require('koa');
const app = new Koa();
const port = 3000

app.use(ctx => {
  if(ctx.path === '/'){
    ctx.status = 200
    ctx.type = "html"
    ctx.body = "<h1>Anasayfaya Hos Geldiniz</h1>"
  }else if(ctx.path === '/about'){
    ctx.status = 200
    ctx.type = "html"
    ctx.body = "<h1>Hakkimizda Sayfasina Hos Geldiniz</h1>"
  }else if(ctx.path === '/contact'){
    ctx.status = 200
    ctx.type = "html"
    ctx.body = "<h1>Iletisim Sayfasina Hoş Geldiniz</h1>"
  }else{
    ctx.status = 404
    ctx.type = "html"
    ctx.body = "<h1>404 HATA SAYFA BULUNAMADI</h1>"
  }
});


app.listen(port, () => {
    console.log(`Sunucu ${port} unda oluşturuldu.`)
});




/* 
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
*/