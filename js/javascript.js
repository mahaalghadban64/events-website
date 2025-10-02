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

    // Add event listeners
    document.querySelector('.menu-toggle').addEventListener('click', showsidebar);
    document.querySelector('.sidebar .close').addEventListener('click', hidesidebar);

 

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






