

let fName =document.getElementById('f-Name')
let lNAme =document.getElementById('l-Name')
let phone =document.getElementById('phone')
let passWord =document.getElementById('passWord')
let rePassword =document.getElementById('Re-password')
let email =document.getElementById('email')
let btnSignUp =document.getElementById('btnSignUp')

let arraySignup=[]

  
//start validation sign up

if(localStorage.getItem("arraySignup")!=null){
    arraySignup= JSON.parse(localStorage.getItem("arraySignup"))
}
btnSignUp.addEventListener('click',function(){
   
        if(validate(fName,nameRegex)==true&&validate(lNAme,nameRegex)==true&&validate(email,emailRegex)==true&&validate(passWord,passwordRegex)==true&&validate(rePassword,rePasswordRegex)==true&& validate(phone,phoneRegex)==true){
    
            let signUP={
            fName:fName.value,
            lNAme:lNAme.value,
            phone:phone.value,
            passWord:passWord.value,
            rePassword:rePassword.value,
            email:email.value,
        }
        
        arraySignup.push(signUP)
        localStorage.setItem("arraySignup",JSON.stringify(arraySignup))
        clearSignUp()
    console.log(arraySignup);
    }else{
        massage.classList.replace("d-none", "d-flex");
        document.getElementById("massage").classList.replace("d-none","d-block")
    }
    
    
    
    
})


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


fName.addEventListener('keyup',function(){
    validate(fName, nameRegex) 
})
lNAme.addEventListener('keyup',function(){
    validate(lNAme, nameRegex) 
})
email.addEventListener('keyup',function(){
    validate(email, emailRegex) 
})
passWord.addEventListener('keyup',function(){
    validate(passWord, passwordRegex) 
})

rePassword.addEventListener('keyup',function(){
    validate(rePassword, rePasswordRegex) 
})
phone.addEventListener('keyup',function(){
    validate(phone, phoneRegex) 
})

//end validation sign up
     function validate(element, regex) {
         if (regex.test(element.value)) {
           element.classList.add("is-valid");
           element.classList.remove("is-invalid");
           return true;
         } else {
           element.classList.add("is-invalid");
           element.classList.remove("is-valid");
           return false;
         }
       }







       //------------------------------------
   