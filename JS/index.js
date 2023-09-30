

let fName =document.getElementById('f-Name')
let lNAme =document.getElementById('l-Name')
let phone =document.getElementById('phone')
let passWord =document.getElementById('passWord')
let rePassword =document.getElementById('Re-password')
let email =document.getElementById('email')
let btn =document.getElementById('btnSignUp')

let arraySignup=[]

  
//start validation sign up

// if(localStorage.getItem("arraySignup")!=null){
//     arraySignup= JSON.parse(localStorage.getItem("arraySignup"))
// }
// btnSignUp.addEventListener('click',function(){
   
//         if(validate(fName,nameRegex)==true&&validate(lNAme,nameRegex)==true&&validate(email,emailRegex)==true&&validate(passWord,passwordRegex)==true&&validate(rePassword,rePasswordRegex)==true&& validate(phone,phoneRegex)==true){
    
//             let signUP={
//             fName:fName.value,
//             lNAme:lNAme.value,
//             phone:phone.value,
//             passWord:passWord.value,
//             rePassword:rePassword.value,
//             email:email.value,
//         }
        
//         arraySignup.push(signUP)
//         localStorage.setItem("arraySignup",JSON.stringify(arraySignup))
//         clearSignUp()
//     console.log(arraySignup);
//     }else{
//         massage.classList.replace("d-none", "d-flex");
//         document.getElementById("massage").classList.replace("d-none","d-block")
//     }
    
    
    
    
// })


function clearSignUp(){
    
    fName.value="";
    lNAme.value="";
    phone.value="";
    passWord.value="";
    rePassword.value="";
    email.value="";
}

function closeMassage(){
    massage.classList.replace("d-flex", "d-none");
}

let nameRegex = /^[A-Z][a-z]{3,}$/;
let emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let rePasswordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let phoneRegex =/^(002)?01[0125][0-9]{8}$/;




function isNameValid(){
    if(nameRegex.test(fName.value)){
  return true
  }else{
      return false
  
    }
  
  }
function isLNameValid(){
    if(nameRegex.test(lNAme.value)){
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
 
  fName.addEventListener('keyup',function(){
    if(isNameValid()) {
      document.querySelector(".alertName1").classList.add("d-none")
  }else{
    document.querySelector(".alertName1").classList.replace("d-none","d-block")
  }
});
  
  lNAme.addEventListener('keyup',function(){
    if(isLNameValid()) {
      document.querySelector(".alertName2").classList.add("d-none")
  }else{
    document.querySelector(".alertName2").classList.replace("d-none","d-block")
  }
  
  
  });
  email.addEventListener('keyup',function(){
    if(isEmailValid()) {
      document.querySelector(".alertEmail1").classList.add("d-none")
  }else{
    document.querySelector(".alertEmail1").classList.replace("d-none","d-block")
  }
  
  
  });
  phone.addEventListener('keyup',function(){
    if(isPhoneValid()) {
      document.querySelector(".alertPhone1").classList.add("d-none")
  }else{
    document.querySelector(".alertPhone1").classList.replace("d-none","d-block")
  }
  
  
  });
  passWord.addEventListener('keyup',function(){
    if(isPassValid()) {
      document.querySelector(".alertPass1").classList.add("d-none")
  }else{
    document.querySelector(".alertPass1").classList.replace("d-none","d-block")
  }
  
  
  });
  rePassword.addEventListener('keyup',function(){
    if(isRePassValid()) {
      if (rePassword.value === passWord.value){
  
        document.querySelector(".alertRePass1").classList.add("d-none")
      }
  }else{
    document.querySelector(".alertRePass1").classList.replace("d-none","d-block")
  }
  
  
  });
 




  
  fName.addEventListener('keyup',function(){
    if(isNameValid()&&isLNameValid()&&isEmailValid()&&isRePassValid()&&isPhoneValid()&&isAgeValid()&&isPassValid()) {
      btnSignUp.removeAttribute("disabled")
    }else{
      btnSignUp.disabled="true"
    }
  })
  
  lNAme.addEventListener('keyup',function(){
    if(isNameValid()&&isLNameValid()&&isEmailValid()&&isRePassValid()&&isPhoneValid()&&isPassValid()) {
      btnSignUp.removeAttribute("disabled")
    }else{
      btnSignUp.disabled="true"
    }
  })
    email.addEventListener('keyup',function(){
      if(isNameValid()&&isLNameValid()&&isEmailValid()&&isRePassValid()&&isPhoneValid()&&isPassValid()) {
        btnSignUp.removeAttribute("disabled")
      }else{
        btnSignUp.disabled="true"
      }})
    passWord.addEventListener('keyup',function(){
      if(isNameValid()&&isLNameValid()&&isEmailValid()&&isRePassValid()&&isPhoneValid()&&isPassValid()) {
        btnSignUp.removeAttribute("disabled")
      }else{
        btnSignUp.disabled="true"
      }})
   rePassword.addEventListener('keyup',function(){
    if(isNameValid()&&isLNameValid()&&isEmailValid()&&isRePassValid()&&isPhoneValid()&&isPassValid()) {
      if (rePassword.value === passWord.value){
      btnSignUp.removeAttribute("disabled")
    }}else{
      btnSignUp.disabled="true"
    }})
   phone.addEventListener('keyup',function(){
    if(isNameValid()&&isLNameValid()&&isEmailValid()&&isRePassValid()&&isPhoneValid()&&isPassValid()) {
      btnSignUp.removeAttribute("disabled")
    }else{
      btnSignUp.disabled="true"
    }})
 
    
// fName.addEventListener('keyup',function(){
//     validate(fName, nameRegex) 
// })
// lNAme.addEventListener('keyup',function(){
//     validate(lNAme, nameRegex) 
// })
// email.addEventListener('keyup',function(){
//     validate(email, emailRegex) 
// })
// passWord.addEventListener('keyup',function(){
//     validate(passWord, passwordRegex) 
// })

// rePassword.addEventListener('keyup',function(){
//     validate(rePassword, rePasswordRegex) 
// })
// phone.addEventListener('keyup',function(){
//     validate(phone, phoneRegex) 
// })

//end validation sign up
        // function validate(element, regex) {
        //     if (regex.test(element.value)) {
        //     element.classList.add("is-valid");
        //     element.classList.remove("is-invalid");
        //     return true;
        //     } else {
        //     element.classList.add("is-invalid");
        //     element.classList.remove("is-valid");
        //     return false;
        //       }
        // }







       //------------------------------------
   