

  $(document).ready(function(){
    $(".loading1").fadeOut(1000,function(){
        $('body').css("overflow","auto")
        $('.loading1').remove()
    })
    
    // $(".headerCaption1").animate({width:"30%"},1000);
    // $(".headerCaption1").animate({height:"100px"},1000);

    
    
    let sectionOffset=$(".sec2").offset().top
    // console.log(sectionOffset);
    $(window).scroll(function(){
      let windowScroll=$(window).scrollTop();
      if(windowScroll>sectionOffset-70){
        $('.navbar1').css("backgroundColor","rgb(35, 99, 112)")
        $('#btnUp').fadeIn(500)
    }
    else{
      $('.navbar1').css("backgroundColor","rgba(0,0,0,0.1)")
      $('#btnUp').fadeOut(500)
      
    }
  })
     
  $('#btnUp').click(function(){
    $('html,body').animate({scrollTop:0},200)
  })
  
  // $('.multiple-items').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // });


  $(document).ready(function(){
    $('.slickSlider').slick({
        infinite: true,
        autoplay:true,
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


 
      });




