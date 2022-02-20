let togglebtn=document.getElementsByClassName('toggle-btn')[0]
let nav=document.getElementsByClassName('navbr')[0]

togglebtn.addEventListener('click',function(){
    nav.classList.toggle('active')
})

// slider
let counter=0;
let slides = document.getElementsByClassName('slides');
function control(x){
    counter = counter +x;
    slideshow(counter);
}
slideshow(counter);
function slideshow(num){
    if(num==slides.length){
        counter=0;
        num=0;
    }
    if(num<0){
        counter=counter+slides.length;
        num=num+slides.length;
    }
    for (let y of slides){
        y.style.display='none';
    }
    slides[num].style.display="block";
}