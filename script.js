// your code here
let NameInp = document.getElementById("name") 
let yearInp = document.getElementById("year")
let form = document.querySelector("form")
let display = document.getElementById("url")

form.addEventListener("submit" , (e)=>{
	e.preventDefault()
    display.innerText =  `https://localhost:8080/?name=${NameInp.value}&year=${yearInp.value}`
	
})