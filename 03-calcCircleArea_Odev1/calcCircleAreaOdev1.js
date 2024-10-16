function calcCircleArea(s){
    console.log(s)
    console.log(`Dairenin Alanı = ${Math.PI * s*s}`)
}
const radius = process.argv[2]

calcCircleArea(radius)
