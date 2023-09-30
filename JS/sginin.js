
let logPassWord =document.getElementById('logPassWord')
let logEmail =document.getElementById('logEmail')
let btnSignIn =document.getElementById('btnSignIn')
let arraySignIp=[]

// if(localStorage.getItem("arraySignIp")!=null){
//     arraySignIp= JSON.parse(localStorage.getItem("arraySignIp"))
// }
// btnSignIn.addEventListener('click',function(){
   
//         if(validate(logEmail,logEmailRegex)==true&&validate(logPassWord,logPasswordRegex)==true){
    
//             let signIn={
    
//                 logEmail:logEmail.value,
//             logPassword:logPassWord.value
//         }
        
//         arraySignIp.push(signIn)
//         localStorage.setItem("arraySignIp",JSON.stringify(arraySignIp))
        
//         console.log(arraySignIp);
//     clearSignIn()
//     }else{
//         massageLog.classList.replace("d-none", "d-flex");
//         document.getElementById("massageLog").classList.replace("d-none","d-block")}
    
    
    
    
// })

document.getElementById("show").addEventListener("click",function(){
  if(logPassWord.type =="password"){
    logPassWord.type="text";
    
  } 
  else{
    logPassWord.type="password"
 }
})
document.getElementById("show").addEventListener("click",function(){
  document.getElementById("show").classList.replace("d-block","d-none") 
  document.getElementById("hide").classList.replace("d-none","d-block") 
})
// document.getElementById("hide").addEventListener("click",function(){
//   document.getElementById("hide").classList.replace("d-block","d-none") 
//   document.getElementById("show").classList.replace("d-none","d-block") 
// })
function clearSignIn(){
    
    logEmail.value="";
    logPassWord.value="";
}

function closeMassageLog(){
    massageLog.classList.replace("d-flex", "d-none");
}

let logEmailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let logPasswordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


  
function isEmailValid1(){
  if(logEmailRegex.test(logEmail.value)){
return true
  }else{
    return false
    
  }
  
}
function isPassValid1(){
  if(logPasswordRegex.test(logPassWord.value)){
return true
  }else{
    return false

  }

} 


logEmail.addEventListener('keyup',function(){
  if(isEmailValid1()) {
    document.querySelector(".alertEmail2").classList.add("d-none")
}else{
  document.querySelector(".alertEmail2").classList.replace("d-none","d-block")
}


});

logPassWord.addEventListener('keyup',function(){
  if(isPassValid1()) {
    document.querySelector(".alertPass2").classList.add("d-none")
}else{
  document.querySelector(".alertPass2").classList.replace("d-none","d-block")
}


});


logEmail.addEventListener('keyup',function(){
  if(isEmailValid1()&&isPassValid1()) {
    btnSignIn.removeAttribute("disabled")
  }else{
    btnSignIn.disabled="true"
  }})
  logPassWord.addEventListener('keyup',function(){
  if(isEmailValid1()&&isPassValid1()) {
    btnSignIn.removeAttribute("disabled")
  }else{
    btnSignIn.disabled="true"
  }})


//end validation sign in



