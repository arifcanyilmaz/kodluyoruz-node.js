{/* ************ SENKRON ÖRNEKLER ************
console.log('1.görev')
console.log('2.görev') --> bunlar normal sırayla basılır.
console.log('3.görev')

const func1 = () => {
    console.log('Func1 tamamlandı')
}
const func2 = () => {
    console.log('Func2 tamamlandı')
}

func1() --> bunlar da normal sırayla basılır.
func2()


const func1 = () => {
        console.log('Func1 tamamlandı')
        func2()
}
const func2 = () => {
        console.log('Func2 tamamlandı')
        func3() 
}
const func3 = () => {
    console.log('Func3 tamamlandı')
}
func1() ---> Yine senkron olarak basılır. */
}
//NOT: Java script --> Single Thread(aynı anda tek iş yapma) ve Senkron çalışır(Yani sıralı şekilde ilerler).*/


// ************ ASENKRON ÖRNEKLER ************
{let x = 5
console.log("1.Gelen veri:",x)

setTimeout(()=> {
    x += 5
    console.log("2.Gelen veri:",x) // --> callback fonksiyon
},2000) // En son bu basılacak. 1 - 3 - 2

x += 5
console.log("3.Gelen veri:",x)}


const books = [
    {name: 'Book 1' , author: 'Yazar1'},
    {name: 'Book 2' , author: 'Yazar2'},
    {name: 'Book 3' , author: 'Yazar3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name)
    })
};

//listBooks()

const addbook = (newbook,callback) => {
    books.push(newbook)
    callback()
};

addbook({name: 'Book 4' , author: 'Yazar4'},listBooks)

// Bir fonksiyonun içine 'callback' isimli parametreyle fonksiyon göndermek.