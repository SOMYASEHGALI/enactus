var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var started=0;
  let but=document.querySelector('#one');
  but.addEventListener("click",function (){
    if(started===0){
        but.innerHTML="he was a great thief <br>father moscow<br>later married to monica";
        started=1;
    }
    else{
        but.innerHTML="denver";
        started=0;
    }
    
    }
  )
  
  
  let but2=document.querySelector('#two');
  but2.addEventListener("click",function (){
    
    if(started===0){
        but2.innerHTML="he was a great thief <br>in relation with palermo<br>lived with nairobi after royal mint heist";
        started=1;
    }else{
        but2.innerHTML="helsinki";
        started=0;
    }
    
    }
  )
  
  
  let but3=document.querySelector('#three');
  but3.addEventListener("click",function (){
    
    if(started===0){
        but3.innerHTML="she was a great thief <br>died in later seasons<br>lived with nairobi after royal mint heist";
        started=1;
    }else{
        but3.innerHTML="nairobi";
        started=0;
    }
    
    }
  )
  
  let but4=document.querySelector('#four');
  but4.addEventListener("click",function (){
    
    if(started===0){
        but4.innerHTML="she was a great thief <br>died in later seasons<br>in relation with rio";
        started=1;
    }else{
        but4.innerHTML="tokyo"
        started=0;
    }
    
    }
  )
 
  
  let but5=document.querySelector('#six');
  but5.addEventListener("click",function (){
    
    if(started===0){
        but5.innerHTML="he was a master mind of heist for royal mint and bank of spain";
        started=1;
    }else{
        but5.innerHTML="professor";
        started=0;
    }
    
    }
  )
  let alum=document.querySelector("#alum");
  alum.addEventListener("click",function(){
    if(started===0){
        alum.innerHTML="agritech startup by enactus IITR alumni secures 3.4M$ <br>seed round led by OMNIVORE,WATERBRIDGE"
    started=1;
    }
    else{
        alum.innerHTML="ankit bagaria,abhi gawri";
        started=0;
    }

  })
  



