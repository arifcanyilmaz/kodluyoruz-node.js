const fs = require('fs') //Kullanıma hazır(core) modül. Ondan dosya yoluna gerek yok.

// //Dosya Okumak
// fs.readFile('10-fsModule/password.txt', 'utf8', (err,data)=>{ //callback fonksiyon!
//     if(err){
//         console.log('1-DOSYA OKUNAMADI')
//     }else{
//         console.log(data)
//         console.log('1-Dosya Okundu')
//     }
// })

// //Dosya Yazmak
// fs.writeFile('10-fsModule/message.txt', 'Hello Node.js', 'utf-8', (err)=> {
//     if (err) console.log('2-DOSYA YAZILAMADI')
//     else {
//         console.log('2-Txt Dosya Başarıyla Oluşturuldu.')
//     }

// })

// fs.writeFile('10-fsModule/message.json', '{"name": "Arif", "Age": 22}', 'utf-8', (err)=> {
//     if (err) console.log('3-DOSYA OLUŞTURULAMADI')
//     else {
//         console.log('3-Json Dosya Başarıyla Oluşturuldu.')
//     }
    
// })

// //VERİ EKLEMEK
// fs.appendFile('10-fsModule/message.txt', '\nKODLUYORUZDAN DA SELAM', 'utf-8', (err)=> {
//     if (err) console.log('4-VERİ EKLENEMEDİ')
//     else {
//         console.log('4-Txt Dosyasın Başarıyla Veri Eklendi')
//     }
    
// })

// //DOSYA SİLMEK
// fs.unlink('10-fsModule/willbedeleted.txt', (err) => {
//     if (err) console.log('5-DOSYA SİLİNEMEDİ')
//     else {
//         console.log('5-Txt dosyası başarıyla silindi.')
//     }
    
// })


// //KLASÖR OLUŞTURMAK
// fs.mkdir('10-fsModule/uploads/img', {recursive: true}, (err) => {
//     if (err) console.log(err)
//     else {
//         console.log('6-Klasörler oluşturuldu.')
//     }
    
// })


//KLASÖR SİLMEK
fs.rm('10-fsModule/uploads', {recursive: true}, (err) => {
    if (err) console.log('7-KLASÖRLER SİLİNEMEDİ')
    else {
        console.log('7-Klasörler Silindi')
    }
    
})

console.log(__filename)