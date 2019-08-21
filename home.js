var width = 130; // image width
var count = 4; // visible images count
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
var position = 0; 

     // shift left
  document.querySelector('.prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
  };

    // shift right
  document.querySelector('.next').onclick = function() {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
    