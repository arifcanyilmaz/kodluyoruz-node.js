const argumnets = process.argv.slice(2)

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
            console.log("Asal Sayılır:",a)
        }
    }
}

calcPrimeNumber(argumnets[0],argumnets[1])

console.log(process.argv[1]) //Dosya yolunu gösterir