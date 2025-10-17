  // sidebar functions
function showsidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hidesidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Add event listeners
document.querySelector('.menu-toggle').addEventListener('click', showsidebar);
document.querySelector('.sidebar .close').addEventListener('click', hidesidebar);

    function showsidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'flex';
    }

    function hidesidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';
    }
    // ------------------------------------------------------------------
      // sidebar functions
function showsidebarar() {
  const sidebarar = document.querySelector('.arabic .sidebar');
  sidebarar.style.display = 'flex';
}

function hidesidebarar() {
  const sidebarar = document.querySelector('.arabic .sidebar');
  sidebarar.style.display = 'none';
}

// Add event listeners
document.querySelector('.arabic .menu-toggle').addEventListener('click', showsidebarar);
document.querySelector('.arabic .sidebar .close').addEventListener('click', hidesidebarar);

    function showsidebarar() {
      const sidebarar = document.querySelector('.arabic .sidebar');
      sidebarar.style.display = 'flex';
    }

    function hidesidebarar() {
      const sidebarar = document.querySelector('.arabic .sidebar');
      sidebarar.style.display = 'none';
    }



  

     // ------------------------------------------------------------------
// slider section 
var indexValue =1;
showImg(indexValue);     

function btm_slide(e){
showImg(indexValue =e);}

function side_slide(e){
showImg(indexValue+=e);}



function showImg(e){
var i;
const img =document.querySelectorAll('.trading-event .slides img');
const sliders=document.querySelectorAll('.trading-event .btm-sliders span');







if(e > img.length){indexValue=1}
if(e < 1){indexValue=img.length}


for(i = 0; i< img.length; i++)
{
img[i].style.display="none";

}


for(i=0;i<sliders.length;i++)
{
sliders[i].style.background="white";
}


img[indexValue -1].style.display ="block";
sliders[indexValue -1].style.background="#500d74";
}
// --------------------------------------------------------------
  document.querySelector('.menu-toggle').addEventListener('click', showsidebar);
    document.querySelector('.sidebar .close').addEventListener('click', hidesidebar);

 

var indexValue =1;
showImgar(indexValue);     

function btm_slidear(o){
showImgar(indexValue =o);}

function side_slidear(o){
showImgar(indexValue+=o);}


function showImgar(o){
var i;
const imgar =document.querySelectorAll('.arabic .trading-event .slides img');
const slidersar=document.querySelectorAll('.arabic .trading-event .btm-sliders span');







if(o > imgar.length){indexValue=1}
if(o < 1){indexValue=img.length}


for(i = 0; i< imgar.length; i++)
{
imgar[i].style.display="none";

}


for(i=0;i<slidersar.length;i++)
{
slidersar[i].style.background="white";
}


imgar[indexValue -1].style.display ="block";
slidersar[indexValue -1].style.background="#500d74";
}




// -------------------------------------------------------------------
function setLanguage(lang){
  if(lang=='ar'){
    document.body.setAttribute('lang','ar');
  document.body.setAttribute('dir', 'rtl');

  }
  
  else{
     document.body.setAttribute('lang','en');
  document.body.setAttribute('dir', 'ltr');
  }
}



 






