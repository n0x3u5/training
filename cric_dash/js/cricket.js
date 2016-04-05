var submitBtn = document.querySelector('#submit-team');
submitBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  $(".card-panel").fadeOut();
});
