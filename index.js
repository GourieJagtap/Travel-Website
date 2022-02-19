let togglebtn=document.getElementsByClassName('toggle-btn')[0]
let nav=document.getElementsByClassName('navbr')[0]

togglebtn.addEventListener('click',function(){
    nav.classList.toggle('active')
})