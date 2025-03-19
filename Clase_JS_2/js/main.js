const botAlerta= document.getElementById("boton");
const t_a= document.getElementById("A");
const t_b= document.getElementById("B");
const t_c= document.getElementById("C");





botAlerta.addEventListener("click",()=>{
t_c.value = t_a.value;
})