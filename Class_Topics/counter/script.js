let addbtn = document.querySelector('#add')
let subbtn = document.querySelector('#sub')
let resbtn = document.querySelector('#reset')
let number = document.querySelector('#number')
let incrementFieldd = document.querySelector('#incr_decr')
let incrementNumber = 1 

addbtn.addEventListener('click' ,function(e){
   let total = parseInt(number.innerText) + parseInt(incrementFieldd.value)
   number.innerText = total
})

subbtn.addEventListener('click',function(e){
    let total = parseInt(number.innerText)-parseInt(incrementFieldd.value);
    number.innerText=total;
})

resbtn.addEventListener('click',function(e){
   number.innerText =0;
   incrementFieldd.value =1;
})