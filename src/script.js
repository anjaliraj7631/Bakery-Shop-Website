let cartIcon=document.querySelector('#cart-btn');
let cart=document.querySelector('.cart');
cartIcon.onclick=()=>{
    cart.classList.toggle('active');
    cont.classList.remove('active');
    log.classList.remove('active');
}
let contact1=document.querySelector('#message');
let cont=document.querySelector('.feedback');
contact1.onclick=()=>{
    cont.classList.toggle('active');
    cart.classList.remove('active');
    log.classList.remove('active');
}
let login1=document.querySelector('#logIn');
let log=document.querySelector('.account');
login1.onclick=()=>{
    log.classList.toggle('active');
    cart.classList.remove('active');
    cont.classList.remove('active')

}

var count=1;
setInterval(function(){
    document.getElementById('r' + count).checked=true;
    count++;
    if(count>8){
        count=1;
    }
},1500);