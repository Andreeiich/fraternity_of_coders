function showModalWindow(){
  document.getElementsByClassName("modal-1")[0].classList.add("active");
  document.body.style.overflow = 'hidden';
}

function hideModalWindow(){
  document.getElementsByClassName("modal-1")[0].classList.remove("active");
  document.body.style.overflow = 'auto';
}