var btn= document.querySelector('.hover-button')
btn.onmouseover = function(e){
 var x = e.pageX-btn.offsetLeft;
 var y = e.pageY-btn.offsetTop;
 btn.style.setProperty(--x , x +'px');
 btn.style.setProperty(--y , y +'px')
}