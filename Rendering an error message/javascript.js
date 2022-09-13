let errorParagraph = document.getElementById("error")
console.log(errorParagraph)
function purchase(){
    console.log("Button Click")
    errorParagraph.textContent='Something went wrong! Please try again';
}