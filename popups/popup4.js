// Popup works after click button

var popup = document.querySelector('.popup');
var openPopupButton = document.querySelector('.button-show');
var closePopupButton = popup.querySelector('.button-hide');

openPopupButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup--open');
});

closePopupButton.addEventListener('click', function() {
  popup.classList.remove('popup--open');
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('popup--open');
  }
});