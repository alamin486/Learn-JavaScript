let hands=["Rock","Paper","Scissor"]
function getHand(){
    let rendomIndex=Math.floor(Math.random()*3)
    return hands[rendomIndex]
}
console.log(getHand())