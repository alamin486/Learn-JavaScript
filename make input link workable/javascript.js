let myLeads=[]
const inputEl=document.getElementById("input-el")

const inputBtn= document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLead()
})
function renderLead(){
let listIteams=" "
for(let i=0;i<myLeads.length;i++){

    listIteams+=`<li>
    <a target='_blank'href='${myLeads[i]}'>
    ${myLeads[i]}</a>
    </li>`
}
ulEl.innerHTML= listIteams
}