
let Name =document.getElementById('Name')
let passWord =document.getElementById('passWord')
let phone =document.getElementById('phone')
let rePassword =document.getElementById('Re-password')
let email =document.getElementById('email')
let Age =document.getElementById('Age')
let btn =document.getElementById('btn')

let nameRegex = /^[a-zA-Z ]+$/;
let emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let AgeRegex= /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
let rePasswordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let phoneRegex =/^(002)?01[0125][0-9]{8}$/;
let passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;




function isNameValid(){
  if(nameRegex.test(Name.value)){
return true
}else{
    return false

  }

}


function isEmailValid(){
  if(emailRegex.test(email.value)){
return true
  }else{
    return false
    
  }
  
}
function isPassValid(){
  if(passwordRegex.test(passWord.value)){
return true
  }else{
    return false

  }

}
function isRePassValid(){
  if(rePasswordRegex.test(rePassword.value)){
return true
  }else{
    return false

  }

}
function isPhoneValid(){
  if(phoneRegex.test(phone.value)){
return true
  }else{
    return false

  }

}
function isAgeValid(){
  if(AgeRegex.test(Age.value)){
return true
  }else{
    return false

  }

}
Name.addEventListener('keyup',function(){
  if(isNameValid()) {
    document.querySelector(".alertName").classList.add("d-none")
}else{
  document.querySelector(".alertName").classList.replace("d-none","d-block")
}


});
email.addEventListener('keyup',function(){
  if(isEmailValid()) {
    document.querySelector(".alertEmail").classList.add("d-none")
}else{
  document.querySelector(".alertEmail").classList.replace("d-none","d-block")
}


});
phone.addEventListener('keyup',function(){
  if(isPhoneValid()) {
    document.querySelector(".alertPhone").classList.add("d-none")
}else{
  document.querySelector(".alertPhone").classList.replace("d-none","d-block")
}


});
passWord.addEventListener('keyup',function(){
  if(isPassValid()) {
    document.querySelector(".alertPass").classList.add("d-none")
}else{
  document.querySelector(".alertPass").classList.replace("d-none","d-block")
}


});
rePassword.addEventListener('keyup',function(){
  if(isRePassValid()) {
    if (rePassword.value === passWord.value){

      document.querySelector(".alertRePass").classList.add("d-none")
    }
}else{
  document.querySelector(".alertRePass").classList.replace("d-none","d-block")
}


});
Age.addEventListener('keyup',function(){
  if(isAgeValid()) {
    document.querySelector(".alertAge").classList.add("d-none")
}else{
  document.querySelector(".alertAge ").classList.replace("d-none","d-block")
}


});









  Name.addEventListener('keyup',function(){
  if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()) {
    btn.removeAttribute("disabled")
  }else{
    btn.disabled="true"
  }
})
  email.addEventListener('keyup',function(){
    if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()) {
      btn.removeAttribute("disabled")
    }else{
      btn.disabled="true"
    }})
  passWord.addEventListener('keyup',function(){
    if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()) {
      btn.removeAttribute("disabled")
    }else{
      btn.disabled="true"
    }})
 rePassword.addEventListener('keyup',function(){
  if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()) {
    if (rePassword.value === passWord.value){
    btn.removeAttribute("disabled")
  }}else{
    btn.disabled="true"
  }})
 phone.addEventListener('keyup',function(){
  if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()) {
    btn.removeAttribute("disabled")
  }else{
    btn.disabled="true"
  }})
Age.addEventListener('keyup',function(){
  if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()) {
    btn.removeAttribute("disabled")
  }else{
    btn.disabled="true"
  }})
  