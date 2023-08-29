

  $(document).ready(function(){
    $(".loading1").fadeOut(1000,function(){
        $('body').css("overflow","auto")
        $('.loading1').remove()
    })
    
    $(".headerCaption1").animate({width:"30%"},1000);
    // $(".headerCaption1").animate({height:"100px"},1000);




    let sectionOffset=$(".headScroll").offset().top
    // console.log(sectionOffset);
    $(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if(windowScroll>sectionOffset){
        $('.navbar1').css("backgroundColor","rgb(35, 99, 112)")
        $('#btnUp').fadeIn(500)
    }
    else{
        $('.navbar1').css("backgroundColor","rgba(0,0,0,0.7)")
        $('#btnUp').fadeOut(500)

    }
  })

  $('#btnUp').click(function(){
    $('html,body').animate({scrollTop:0},200)
  })

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });


  $(document).ready(function(){
    $('.slickSlider').slick({
        infinite: true,
        // autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
  });

  var typed = new Typed('#element', {
    strings: [" welcome to Go cart",'he best online shopping site in the Middle East that helps you find what you want in the easiest possible way',"We have many products that everyone who browses the site is looking for"],
    typeSpeed: 50,
    loop: true,
    bindInputFocusEvents: true,
  
  
  
  });


 
  
  
    $(".skitter-large").skitter({
      focus:true,
    
      
        });
  
  let colorBox=$('.color-box');
  
  colorBox.eq(0).css("backgroundColor","red")
  colorBox.eq(1).css("backgroundColor","blue")
  colorBox.eq(2).css("backgroundColor","#ccc")
  colorBox.eq(3).css("backgroundColor","#063053")
  colorBox.eq(4).css("backgroundColor","#09c")
        
  
  let sideBarWidth=$(".sideBar1").innerWidth()
$(".sideBar").css("right",- sideBarWidth)
  $(".sideBar i").click(function(){
  if( $(".sideBar").css("right")=="0px"){
  $(".sideBar").animate({right:-sideBarWidth},1000)
  }else{
  $(".sideBar").animate({right:"0px"},1000)
  
  }
  
  });
  colorBox.click(function(e){
  let btnColor=  $(e.target).css("backgroundColor")
    $(".Color ,btn ").css('color' ,btnColor)
  })



  $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
});




