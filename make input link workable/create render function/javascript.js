let myLeads=[]
const inputEl=document.getElementById("input-el")

const inputBtn= document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    renderLead()
})
function renderLead(){
let listIteams=" "
for(let i=0;i<myLeads.length;i++){

    listIteams+="<li>"+myLeads[i]+"</li>"
}
ulEl.innerHTML= listIteams
}