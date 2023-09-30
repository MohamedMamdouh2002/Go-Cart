$(".item").click(function(e){
    let currentImg =$(e.target).attr("src")
    console.log(currentImg);
    $("#imgItem").attr('src',currentImg)
  
  })
  
