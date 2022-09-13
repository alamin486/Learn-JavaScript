let firstCard=10
let secondCard=11
let sum=firstCard+secondCard
let gotBlackJack=false
let isAlive=true
if(sum <= 20){
    console.log("Do you want to draw a new card?")
}else if(sum === 21){
    console.log("Wohoo!You got a blackJack!")
    hashBlackJack=true
}else{
    console.log("You are out of the game!")
isAlive=false
}
console.log(isAlive)
console.log(hashBlackJack)