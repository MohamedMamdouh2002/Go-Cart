

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
    
    // console.log(secOffset);
  })
  // s = () => {
  //   let ss = document.querySelector(".sss"); // استخدم # لاستهداف عنصر بواسطة الـ ID
  //   ss.classList.replace("d-none", "d-block"); // قم بتبديل الفئة "d-none" بالفئة "d-block" لعرض العنصر
  //   setTimeout(() => {
  //     ss.classList.replace("d-block", "d-none"); // استرجع الفئة "d-none" بعد انتهاء المدة لإخفاء العنصر
  //   }, 2000);
  // }
  
  
  // setInterval(s, 3000); // كل 5 دقائق (300000 مللي ثانية)
  


  alert2 = () => {
  let alert = document.querySelector(".alert2"); 
  alert.classList.replace("d-none", "d-block");
  

  
    setTimeout(() => {
      alert.classList.replace("d-block", "d-none"); 
    }, 3000);
  }
  setInterval(alert2, 300000);
  
  
  
  $('#btnUp').click(function(){
    $('html,body').animate({scrollTop:0},200)
  })
  // let secOffset=$(".slider").offset().top
  // $('.ex').click(function(){
  //   $('html,body').scroll(secOffset,400)
  // })
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


  $(document).ready(function(){
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
  });



  


  
  $(".skitter-large").skitter({
      focus:true,
      dots:true ,
      controls:true
    
      
        });


        

        
        
        
        var mixer = mixitup(".conRow");  

        let searchIcon=document.querySelector(".search")
        let searchInput=document.querySelector(".search1")
 
        searchIcon.addEventListener("click",function () {  
         searchIcon.classList.replace("d-block","d-none")
        // $(searchIcon).css({"content":"\f002"," z-index":"6546464654"," position":"absolute","left":"8px","right":"11px"})
         searchInput.classList.replace("d-none","d-block",)
        })














        // var swiper = new Swiper(".slide-swp", {
        //   pagination: {
        //     el: ".swiper-pagination",
        //     dynamicBullets: true,
        //     clickable:true
        //   },
        //   autoplay:{
        //       delay:2500,
        //   },
        //   loop:true,
        // });
      
        // var swiper = new Swiper(".deals", {
        //   slidesPerView: 2,
        //   spaceBetween: 30,
        //     autoplay: {
        //       delay: 300000,
        //       disableOnInteraction: false,
        //     },
        //     navigation: {
        //       nextEl: ".swiper-button-next",
        //       prevEl: ".swiper-button-prev",
        //     },
        //     loop:true,
        //     breakpoints:{
        //       1200:{
        //         slidesPerView : 2,
        //       },
        //       990 : {
        //         slidesPerView : 1,
        //       },
        //       0 :{
        //         slidesPerView : 1,
        //       }
              
        //     }
        // });
      
      
      
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
      
      
      
        
        // var swiper = new Swiper(".swip-with-img", {
        //   slidesPerView: 4,
        //   spaceBetween: 30,
        //     autoplay: {
        //       delay: 3000,
        //       disableOnInteraction: false,
        //     },
        //     navigation: {
        //       nextEl: ".swiper-button-next",
        //       prevEl: ".swiper-button-prev",
        //     },
        //     loop:true,
        //     breakpoints:{
        //       1400:{
        //         slidesPerView: 4,
        //       },
        //       1100:{
        //         slidesPerView : 3,
        //       },
        //       800:{
        //         slidesPerView : 2,
        //         spaceBetween: 30,
        //       },
        //       700 :{
        //         slidesPerView : 2,
        //         spaceBetween: 15,
        //       },
        //       0 :{
        //         slidesPerView : 2,
        //         spaceBetween: 10,
        //       }
              
        //     }
        // });
        

        AOS.init();

   
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
      
        let circleText =document.querySelector('.circle-text');
        circleText.innerHTML=circleText.textContent.split("").map((char,index)=> `<span style= "transform:rotate(${index *28.5}deg)">${char}</span>`).join("")
        
    });