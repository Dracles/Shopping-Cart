let dec = document.querySelector(".decrease");
let inc = document.querySelector(".increase")
let deletebtn = document.querySelector(".delete");
let ligne = document.querySelector(".ligne1");
let quant = document.querySelector(".quant");

deletebtn.addEventListener("click",() =>{
    ligne.remove();
})
dec.addEventListener("click", () => {
    let num = quant.value;
    num--;
    quant.value= num;
})
inc.addEventListener("click", () => {
    let num = quant.value;
    num++;
    quant.value= num;
})