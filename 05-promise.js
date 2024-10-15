// resolve --> olumlu sonuç // reject --> olumsuz sonuç
const promise1 = new Promise ((resolve, reject) => {
    resolve('Veriler alındı')
    reject('Hata404')
})  //hangisi ilk okunursa promise değeri olarak o döner.

//console.log(promise1)

promise1
    .then(value => {
        console.log(value)
    }).catch(err => {
        console.log(err)
    })

    
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

addbook({ name: 'Book 4', author: 'Yazar4' })
    .then(()=>{
        console.log('Yeni Liste')
        listBooks()
    }).catch((err)=>{
        console.log(err)
    })