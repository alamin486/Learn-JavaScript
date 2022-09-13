let firstCard=6
let secondCard=6
let sum=firstCard+secondCard
if(sum < 21){
    console.log("Do you want to draw a new card?")
} else if(sum === 21){
    console.log("Whoo! You have got blackjack!")
} else if(sum > 21){
    console.log("You are out of the game")
}