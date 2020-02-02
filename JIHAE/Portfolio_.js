// Wrap every letter in a span
var textWrapper = document.querySelector('#ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '#ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '#ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1300
  });

  setTimeout(function() { 
    document.getElementById("ml6").style.display = "none"; 
    document.getElementById("wrap").style.display = "block"; 
  },  3000);
  
  $(document).ready(function() {
    $('#section a[href^="#"]').on("click",function(e){
      e.preventDefault();
      var target = $( $(this).attr("href") );
      
      if(target.length){
        $("html, body").animate({ scrollTop: target.offset().top },900);
      }
      });
  });
  

  $(document).ready(function(){
    $("nav a").click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      if(this.hash !== ""){
        var zzz = this.hash;
        $("html").animate({
          scrollTop : $(zzz).offset().top
        });
      }
    });
  });

