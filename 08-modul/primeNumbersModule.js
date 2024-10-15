function primeNumbers(n1,n2){
    for(let a = n1; a <= n2; a++){
        let isPrime = true
        for(let b = 2; b < a; b++){
            if(a%b == 0){
                isPrime = false
                break
            }
        }
        if(isPrime){
            console.log("Asal Sayılar:",a)
        }
    }
}

module.exports = {
    primeNumbers
}