const fs = require('fs').promises

const data = {
    'name': 'Arif',
    'salary': 2000
} 

// 1.Adım: JSON Dosyasını oluşturma

async function create() {
    try{
        // (writeFile -> Oluşturmak) Dosyaya veriyi string şeklinde gönderiyoruz.
        await fs.writeFile('employees.json', JSON.stringify(data), "utf8")
        console.log("1.Adım: JSON Dosyası Oluşturuldu.");
    }catch(err){
        console.log('1.Adım: Dosya Oluşturulamadı.')
    }
}

// 2.Adım: JSON Dosyasını Okuma 

async function read() {
    try{
        // (readFile -> Okumak) Direkt data.name ile okuyabiliriz.
        await fs.readFile('employees.json', 'utf8')
        console.log(`2.Adım: Dosya Okundu -> İsim: ${data.name} || Maaş: ${data.salary}`)
    }catch(err){
        console.log('2.Adım: Dosya Okunamadı.')
    }
}


// 3.Adım: JSON Dosyasını Güncelleme

async function update() {
    try{
        // Bilgileri Güncelliyoruz.
        data.name = 'Muzaffer'
        data.salary = 30000

        // (writeFile -> Oluşturmak) Güncel bilgilerle yeniden dosyayı oluşturuyoruz.
        await fs.writeFile("employees.json", JSON.stringify(data), "utf8")
        console.log(`3.Adım: Dosya Güncellendi -> İsim: ${data.name} || Maaş: ${data.salary}`)
        
        
    }catch(err){
        console.log('3.Adım: Dosya Güncellenemedi.')
    }
}

async function deleteFile() {
    try{
        // (unlink -> Silmek) Dosyayı siliyoruz.
        await fs.unlink("employees.json")
        console.log("4.Adım: Dosya Başarıyla Silindi.")
    }catch(err){
        console.log('4.Adım: Dosya Silinemedi.')
    }
}


async function main(){
    await create()
    await read()
    await update()
    await read()
    await deleteFile()
}

main()