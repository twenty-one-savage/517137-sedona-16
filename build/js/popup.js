var form=document.querySelector("form"),popupFailure=document.querySelector(".popup-failure"),popupSuccess=document.querySelector(".popup-success"),closeFailure=popupFailure.querySelector(".popup-failure__button"),closeSuccess=popupSuccess.querySelector(".popup-success__button"),phoneNumber=document.querySelector(".contacts__input--phone"),email=document.querySelector(".contacts__input--mail"),firstName=document.querySelector(".fullname__input--name"),surname=document.querySelector(".fullname__input--surname"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("phoneNumber")}catch(e){isStorageSupport=!1}form.addEventListener("submit",function(e){phoneNumber.value&&email.value&&firstName.value&&surname.value?(e.preventDefault(),popupSuccess.classList.add("popup-show"),isStorageSupport&&localStorage.setItem("phoneNumber, phoneNumber.value")):(e.preventDefault(),popupFailure.classList.remove("popup-show--error"),popupFailure.offsetWidth=popupFailure.offsetWidth,popupFailure.classList.add("popup-show--error"),phoneNumber.classList.add("error"),email.classList.add("error"),firstName.classList.add("error"),surname.classList.add("error"),console.log("Введите номер телефона, Ваше имя, фамилию, электронную почту"))}),closeFailure.addEventListener("click",function(e){e.preventDefault(),popupFailure.classList.remove("popup-show--error")}),closeSuccess.addEventListener("click",function(e){e.preventDefault(),popupSuccess.classList.remove("popup-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupFailure.classList.contains("popup-show--error")&&popupFailure.classList.remove("popup-show--error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupSuccess.classList.contains("popup-show")&&popupSuccess.classList.remove("popup-show"))});