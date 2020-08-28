// Selection
let dec = document.querySelectorAll('.decrease');
let inc = document.querySelectorAll('.increase');
let quantity = document.querySelectorAll('.quant');
let deleteBtn = document.querySelectorAll('.delete');
let image = document.getElementsByTagName('img');
let price = document.querySelectorAll('.prix');
let total = document.querySelector('.prix-total');
let product = document.querySelectorAll('.ligne1');
updateTotal();
// Increment & Decrement
for(let i=0; i< inc.length; i++){
    inc[i].addEventListener("click", () => {
        quantity[i].value++;
        updateTotal();
    })
}
for(let i=0; i< inc.length; i++){
    dec[i].addEventListener("click", () => {
        if(quantity[i].value > 1){
            quantity[i].value--;
            updateTotal();
        }
    })
}



// Calcul Total
function updateTotal() {
    console.log(quantity)
    let totalPrice = 0;
    for( let i=0; i<quantity.length; i++){
        totalPrice += quantity[i].value*parseInt(price[i].innerHTML);
    }
    total.innerHTML= totalPrice +" Da";
}

// Delete Product
for (let i=0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener("click",() => {
        product[i].remove();
        quantity[i].value = 0;
        updateTotal();
    })
}
// Like Product
for( let i=0;i<image.length;i++){
    image[i].addEventListener("click", () =>{
        if(image[i].src == "file:///C:/Users/ASUS%20VIVOBOOK%20PRO/Desktop/GoMyCode/Shopping%20Cart/Image/Black-heart.svg"){
            image[i].setAttribute("src","./Image/Red-heart.svg");
        }else{
            image[i].setAttribute("src","./Image/Black-heart.svg");
        }
    })
}