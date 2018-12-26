var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

var addThumbnailClickHandler = function (thumbnail, picture) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = picture;
    });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]);
}
 

