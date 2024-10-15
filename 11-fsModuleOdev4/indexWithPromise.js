const fs = require('fs').promises

const data = {
    'name': 'Arif',
    'salary': 2000
}

// 1.Adım: JSON Dosyasını oluşturma

async function create() {
    try{
        await fs.writeFile('11-fsModuleOdev4/employees.json', JSON.stringify(data), "utf8")
        console.log("1.Adım: JSON Dosyası Oluşturuldu.");
    }catch(err){
        console.log('1.Adım: Dosya Oluşturulamadı.')
    }
}

// 2.Adım: JSON Dosyasını Okuma 

async function read() {
    try{
        await fs.readFile('11-fsModuleOdev4/employees.json', 'utf8')
        console.log(`2.Adım: Dosya Okundu -> İsim: ${data.name} || Maaş: ${data.salary}`)
    }catch(err){
        console.log('2.Adım: Dosya Okunamadı.')
    }
}


// 3.Adım: JSON Dosyasını Güncelleme

async function update() {
    try{
        let fileData = await fs.readFile("employees/employees.json", "utf8")
        fileData = fileData.replace("name", "Muzaffer")
        fileData = fileData.replace("salary", 20000)
        await fs.writeFile("employees/employees.json", fileData, "utf8")
        console.log(`3.Adım: Dosya Güncellendi -> İsim: ${fileData.name} || Maaş: ${fileData.salary}`)
    }catch(err){
        console.log('3.Adım: Dosya Güncellenemedi.')
    }
}


async function main(){
    await create()
    await read()
    await update()
    await read()
}

main()