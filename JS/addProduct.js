let addProductName=document.getElementById('addProductName')
let addProductPrice=document.getElementById('addProductPrice')
let addProductDesc=document.getElementById('addProductDesc')



let addProductPriceRegex= /^(?!0)\d+(?:[.,]\d+)*$/;

addProductPrice.addEventListener('keyup',function(){
    validate(addProductPrice, addProductPriceRegex)
})

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


