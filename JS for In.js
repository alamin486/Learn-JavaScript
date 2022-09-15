const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let i in person) {
  txt += person[i] + " ";
}

document.getElementById("demo").innerHTML = txt;
