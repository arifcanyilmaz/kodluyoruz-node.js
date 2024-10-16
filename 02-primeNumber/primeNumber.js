const argumnets = process.argv.slice(2).map(num => parseInt(num))

function calcPrimeNumber(n1,n2){
    
    for (let a = n1+1; a < n2; a++) {
        let isPrime = true
        for(let b = 2; b < a; b++){
            if(a % b === 0){
                isPrime = false
                break;
            }
        }
        if(isPrime){
            console.log("Asal Sayılar:",a)
        }
    }
}

calcPrimeNumber(argumnets[0],argumnets[1])

//console.log(process.argv[1]) //Dosya yolunu gösterir


// process.argv[0] --> Node.js yürütülebilir dosyasının yolu.
// process.argv[1] --> Çalıştırılan JavaScript dosyasının yolu.
// process.argv[2] --> arg1(konsoldan girilen ilk değer)
// process.argv[3] --> arg2(böyle gider...)


// [
//     '/usr/local/bin/node',  [0]
//     '/Users/arif/app.js',   [1]
//     '10',                   [2]
//     '20'                    [3]
//   ] --> slice(2) ile aslında ilk iki itemi silmiş oluyoruz. Ve böylece almamız gereken
//        10 ve 20 bilgisine ulaşıyoruz.