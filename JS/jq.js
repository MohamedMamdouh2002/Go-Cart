

  $(document).ready(function(){
    $(".loading1").fadeOut(1000,function(){
        $('body').css("overflow","auto")
        $('.loading1').remove()
    })
    

    
    
    let sectionOffset=$(".sec2").offset().top
    // console.log(sectionOffset);
    $(window).scroll(function(){
      let windowScroll=$(window).scrollTop();
      if(windowScroll>sectionOffset-300){
        // $('.navbar1').css("backgroundColor","#fff")
        // $('.search-groub').css("display","none")
        // $(' .navbar2 .nav-link').css("color","#fff")
        // $(' .navbar2 .container').css("width","60%")
        $('.navbar2').css("backgroundColor","rgb(35, 99, 112)")
        $('.search-groub1').css("display","block")
        // $(' .navbar2 .DTCairocolor').css("color","#fff")
        
        
        $('#btnUp').fadeIn(500)
      }
      else{
        // $('.navbar1').css("backgroundColor","rgba(255,255,255,0.2)")
        $('.navbar2').css("backgroundColor","rgba(255,255,255,0.5)")
        // $('.navbar2 .container').css("width","90%")
      $('.search-groub').css("display","block")
      //  $(' .navbar2 .nav-link').css(".navbar2 li:hover:after","#0fff")
      // $(' .navbar2 .DTCairocolor').css("color","#000")

      $('#btnUp').fadeOut(500)
      
    }
  })
     
  $(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if(windowScroll>sectionOffset-300){
      if ($(window).width() > 600) {
        $('.navbar2 .container').css("width","60%")
      }
      else{
        $('.navbar2 .container').css("width","100%")
      }
  
  
    }
    else{
      if ($(window).width() > 600) {
        $('.navbar2 .container').css("width","90%")
      }
      else{
        $('.navbar2 .container').css("width","100%")
      }
      
      
    }
    
  })
 //
 var numbersArray = ["❤️لا اله الا الله❤️", "❤️الله اكبر❤️", "❤️سبحان الله❤️", "❤️الحمد لله❤️", "❤️استغفر الله العظيم❤️","❤️صلي علي النبي❤️"];
 var currentIndex = 0;
  var displayTime = 30000; 
  var hideTime = 2000; 
  
  function displayNumber() {
    var numberBox = document.querySelector('.alert2');
    numberBox.innerHTML = numbersArray[currentIndex];
    currentIndex = (currentIndex + 1) % numbersArray.length;
    numberBox.style.display = 'block';
  
    setTimeout(function () {
      numberBox.style.display = 'none';
    }, hideTime);
  }
  
  displayNumber();
  
  setInterval(displayNumber,displayTime);
  //

  
///countercart

let countercart =document.querySelector('.countercart')
let btn1 =document.querySelector('.btnm')
  let btn2 =document.querySelector('.btnp')
  let counter=0
  
  $(btn1).click(function () { 
  if(counter>0){

    counter--
    countercart.innerHTML=counter
  }
    
  });
  $(btn2).click(function () { 
  
    counter++
    countercart.innerHTML=counter
    
  });


 
    ///countercart
  
  $('#btnUp').click(function(){
    $('html,body').animate({scrollTop:0},200)
  })
  
  document.querySelector('.ex').addEventListener('click', function() {
    var targetSection = document.querySelector('.slider');
    window.scrollTo({
        top: targetSection.offsetTop-180,
        behavior: 'smooth'
    });
});
  
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });


 
    $('.slickSlider').slick({
        infinite: true,
        autoplay:true,
        dots:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
  
        ]
    });




  


  
  $(".skitter-large").skitter({
      focus:true,
      dots:true ,
      controls:true
    
      
        });


        

        
        
        
        var mixer = mixitup(".conRow");  

        // let searchIcon=document.querySelector(".search")
        // let searchInput=document.querySelector(".search1")
 
        // searchIcon.addEventListener("click",function () {  
        //  searchIcon.classList.replace("d-block","d-none")
        // // $(searchIcon).css({"content":"\f002"," z-index":"6546464654"," position":"absolute","left":"8px","right":"11px"})
        //  searchInput.classList.replace("d-none","d-block",)
        // })






      
      
        var swiper = new Swiper(".sale-sec", {
          slidesPerView: 5,
          spaceBetween: 30,
            autoplay:
              {
               delay: 3000,
               disableOnInteraction: false,
             },
                      navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            loop:true,
            breakpoints:{
              1400:{
                slidesPerView: 5,
              },
              1200:{
                slidesPerView : 4,
              },
              800:{
                slidesPerView : 3,
                spaceBetween: 30,
              },
              650 :{
                slidesPerView : 3,
                spaceBetween: 15,
              },
              0 :{
                slidesPerView : 2,
                spaceBetween: 10,
              }
              
            }
        });
      
      
      
        
     
     
//animate Aos
AOS.init();

//animate Aos



//wishlist Aos
      let wishlistBtn = document.querySelectorAll(".addToWL");
      wishlistBtn.forEach(item => {
        item.onclick = function () {

          if (item.firstElementChild.classList.contains("text-danger")) {
            item.firstElementChild.classList.remove("fas", "fa-heart", "text-danger");
              item.firstElementChild.classList.add("far", "fa-heart");
          }
          else {
            item.firstElementChild.classList.remove("far", "fa-heart");
            item.firstElementChild.classList.add("fas", "fa-heart", "text-danger");
          }
        }
      })
      //wishlist Aos
      
      //btncat
      let circleText =document.querySelector('.circle-text');
      circleText.innerHTML=circleText.textContent.split("").map((char,index)=> `<span style= "transform:rotate(${index *28.5}deg)"style="background-color:#555" >${char}</span>`).join("")
      //btncat
      
    });