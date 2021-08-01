console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

/* index */
/* 填表單出現alert */

const formSubmit = document.querySelector(".form__submit");
//console.log(formSubmit);

formSubmit.addEventListener('click',function(e){
  console.log("submit!");
  alert("請稍候，將由專人為您服務！若有其他需求，也歡迎來電詢問！")
})