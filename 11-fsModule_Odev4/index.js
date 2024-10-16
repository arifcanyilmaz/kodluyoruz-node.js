/* employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.*/

const fs = require('fs')
const { stringify } = require('querystring')

// 1.Adım: Dosya Oluşturma
fs.writeFile('11-fsModule_Odev4/employees.json', '{"name": "Employee 1 Arif", "salary": 4000}', (err) => {
    if (err) console.log('1.Adım: Dosya Oluşturalamadı.')
    else {
        console.log('1.Adım: Dosya Başarıyla Oluşturuldu.')
    }
})

// 2.Adım: Veriyi Okuma ve Veriyi Güncelleme
fs.readFile('11-fsModule_Odev4/employees.json', 'utf8', (err, data) => {
    if (err) console.log('2.Adım: Veriler Okunamadı.')
    else {
        console.log('2.Adım: Veriler Okundu -> İsim:', JSON.parse(data).name, '|| Salary:', JSON.parse(data).salary)
    }

    const employee = JSON.parse(data);
    employee.name = 'Employee 1 Muzaffer';
    employee.salary = 20000;

    fs.writeFile('11-fsModule_Odev4/employees.json', JSON.stringify(employee), (err) => {
        if (err) console.log('3.Adım: Dosya Güncellenemedi.')
        else {
            console.log('3.Adım: Dosya Başarıyla Güncellendi.')
            console.log(`3.Adım: Güncellenmiş Hali -> İsim: ${employee.name} || Salary: ${employee.salary}`)

            // 4.Adım: Dosyayı Silelim
            fs.unlink('11-fsModule_Odev4/employees.json', (err) => {
                if (err) console.log('4.Adım: Dosya Silinemedi')
                else {
                    console.log('4.Adım: Json dosyası başarıyla silindi.')
                }
            })
        }
    })
})

