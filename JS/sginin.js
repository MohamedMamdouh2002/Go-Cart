
let logPassWord =document.getElementById('logPassWord')
let logEmail =document.getElementById('logEmail')
let btnSignIn =document.getElementById('btnSignIn')
let arraySignIp=[]

if(localStorage.getItem("arraySignIp")!=null){
    arraySignIp= JSON.parse(localStorage.getItem("arraySignIp"))
}
btnSignIn.addEventListener('click',function(){
   
        if(validate(logEmail,logEmailRegex)==true&&validate(logPassWord,logPasswordRegex)==true){
    
            let signIn={
    
                logEmail:logEmail.value,
            logPassword:logPassWord.value
        }
        
        arraySignIp.push(signIn)
        localStorage.setItem("arraySignIp",JSON.stringify(arraySignIp))
        
        console.log(arraySignIp);
    clearSignIn()
    }else{
        massageLog.classList.replace("d-none", "d-flex");
        document.getElementById("massageLog").classList.replace("d-none","d-block")}
    
    
    
    
})

function clearSignIn(){
    
    logEmail.value="";
    logPassWord.value="";
}

function closeMassageLog(){
    massageLog.classList.replace("d-flex", "d-none");
}

let logEmailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let logPasswordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


  logEmail.addEventListener('keyup',function(){
       validate(logEmail, logEmailRegex) 
  })
  logPassWord.addEventListener('keyup',function(){
    validate(logPassWord, logPasswordRegex) 
})
//end validation sign in




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

