function getData(data) {
    return new Promise((resolve,reject) => {
        console.log('Veriler alınmaya çalışılıyor..')

        if(data){
            resolve('Veriler alındı')
        }else{
            reject('Veriler alınamadı.')
        }
    })
}

function cleanData(receivedData){
    return new Promise((resolve,reject)=>{
        console.log('Veriler düzenleniyor..')

        if(receivedData){
            resolve('Veriler düzenlendi.')
        }else{
            reject('Veriler düzenlenemedi.')
        }
    })
}

// getData(true)
//     .then(result => {
//         console.log(result)
//         return cleanData(false)
//     }).then(result => {
//         console.log(result)
//     }).catch(err =>{
//         console.log(err)
//     })

// Async - Await

async function processData(){
    try{
        const receivedData = await getData(true)
        console.log(receivedData)
        const cleanedData = await cleanData(false)
        console.log(cleanedData)
    }catch(err){
        console.log(err)
    }
    
}

//processData()

// ÖRNEK
const books = [
    { name: 'Book 1', author: 'Yazar1' },
    { name: 'Book 2', author: 'Yazar2' },
    { name: 'Book 3', author: 'Yazar3' }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name)
    })
};

const addbook = (newbook) => {
    const promise2 = new Promise ((resolve,reject) => {
        books.push(newbook)
        resolve(books)
        reject('Hata')
    })

    return promise2
};

// addbook({ name: 'Book 4', author: 'Yazar4' })
//     .then(()=>{
//         console.log('Yeni Liste')
//         listBooks()
//     }).catch((err)=>{
//         console.log(err)
//     })

async function showBook(){
    try{
        await addbook({ name: 'Book 5', author: 'Yazar5' })
        listBooks()
    }catch(err){
        console.log(err)
    }
}    

showBook()