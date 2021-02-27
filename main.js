const mainimg  = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img');
var opacity =0.6;

imgs[0].style.opacity = opacity;
imgs.forEach(img=>img.addEventListener("click",e=>{
  imgClick(e);
}));


function imgClick(e){

  imgs.forEach(img => img.style.opacity=1);

  mainimg.src= e.target.src;
  e.target.style.opacity = opacity;
}
