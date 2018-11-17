var imageCount = 1;
var total = 3;

// function slide(x) {
//   var image = document.getElementById('img');
//   imageCount += x;
//   if(imageCount > total) {imageCount = 1;}
//   if(imageCount < 1) {imageCount = total;}
//   image.src = "assets/sliderimg" + imgCount + ".jpg";
// }

window.setInterval(function slide() {
  var image = document.getElementById('img');
  imageCount += 1;
  if(imageCount > total) {imageCount = 1;}
  if(imageCount < 1) {imageCount = total;}
  image.src = "assets/sliderimg" + imageCount + ".png";
}, 3000);
