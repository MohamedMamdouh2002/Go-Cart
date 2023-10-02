
let minBtn = document.querySelector(".Product-amount .minus");
let plusBtn = document.querySelector(".Product-amount .positive");
minBtn.onclick = function () {
    let q = document.querySelector(".Product-amount .amount");
    let currentQ = parseInt(q.textContent);
    if (currentQ > 1) {
        currentQ--;
    }
    q.textContent = currentQ;
}
plusBtn.onclick = function () {
    let q = document.querySelector(".Product-amount .amount");
    let currentQ = parseInt(q.textContent);
    if (currentQ < 12) {
      currentQ++;
    }
    q.textContent = currentQ;
  }