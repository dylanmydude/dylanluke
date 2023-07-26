window.onload = function() {
  var speed = 6;
  var scroller1 = document.getElementById('scroller');
  var scroller2 = document.getElementById('scroller2');
  var scrollerContainer = document.getElementById('scroller-container');
  var circle = document.getElementById('circle');
  var timer = false;
  var x = 0;

  function animate() {
    x -= speed;
    if (x <= -scroller1.offsetWidth) {
        x = 0;
    }
    scrollerContainer.style.transform = 'translate(' + x + 'px, 0)';
    requestAnimationFrame(animate);
  }

  function positionCircle(e) {
    circle.style.top = e.clientY + 'px';
    circle.style.left = e.clientX + 'px';

    // Save the current mouse position to localStorage.
    localStorage.setItem('mousePosition', JSON.stringify({ x: e.clientX, y: e.clientY }));
  }

  window.onmousemove = function(e) {
    document.body.style.setProperty('--x',(e.clientX)+'px');
    document.body.style.setProperty('--y',(e.clientY)+'px');
    
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      positionCircle(e);
    }, 1);
  }

  animate();
};
// bigger cirlce on links
document.querySelectorAll("a, #logo, .portfolio-image img").forEach(element => {
  element.addEventListener("mouseenter", () => {
    document.querySelector("#circle").classList.add("bigger");
  });
  
  element.addEventListener("mouseleave", () => {
    document.querySelector("#circle").classList.remove("bigger");
  });
});
window.addEventListener("load", function(){
  document.querySelector('#loading-icon').style.display = "none";
});
