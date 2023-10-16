// console.log("Sss");

// s=()=>{
//     console.log("ssss");
//     setTimeout(2000)
// }
//     setInterval(s,5000)

// s = () => {
//     let ss=document.querySelector(".ss").classList.replace("d-none",'d-block')
//     setTimeout(() => {
//       ss.classList.replace("d-block",'d-none'); // لمسح الرسالة من واجهة المستخدم في المتصفح
//     }, 1000);
//   }
  
//   setInterval(s, 5000);

s = () => {
    let ss = document.querySelector(".ss"); // استخدم # لاستهداف عنصر بواسطة الـ ID
    ss.classList.replace("d-none", "d-block"); // قم بتبديل الفئة "d-none" بالفئة "d-block" لعرض العنصر
    setTimeout(() => {
      ss.classList.replace("d-block", "d-none"); // استرجع الفئة "d-none" بعد انتهاء المدة لإخفاء العنصر
    }, 2000);
  }
  
  setInterval(s, 3000); // كل 5 دقائق (300000 مللي ثانية)