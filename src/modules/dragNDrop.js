
/**
 * Создать страницу с кнопкой. При клике на кнопку, на странице должен создаваться div произвольных размеров, в произвольном месте.
 * Цвет фона div'а должен быть каждый раз случайным.
 * Созданные div'ы можно перетаскивать мышкой (drag & drop)
 * @param  {string} btn - кнопка, на которую вешается событие click
 */
export default function (btn) {

  let highestSize = 400,
      lowestSize = 10,
      bodyHeight = document.body.clientHeight,
      bodyWidth = document.body.clientWidth;


  document.querySelector(btn).addEventListener('click', function(){

    let sq = document.createElement('div'),
        height = randomNumber(highestSize, lowestSize),
        width = randomNumber(highestSize, lowestSize);


    sq.className = 'drag-square';
    sq.style.backgroundColor = randomColor();
    sq.style.width = width + "px";
    sq.style.height = height + "px";
    sq.style.top = randomNumber(0, bodyHeight - height) + "px";
    sq.style.left = randomNumber(0, bodyWidth - width) + "px";

    document.body.appendChild(sq);


    let activeElement,
        offsetX = 0,
        offsetY = 0;

    sq.addEventListener('mousedown', function(e){
      activeElement = e.target;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    });

    sq.addEventListener('mouseup', function(e){
      activeElement = null;
    });

    sq.addEventListener('mousemove', function(e){
      if (activeElement != null) {
        activeElement.style.top = (e.clientY - offsetY) + 'px';
        activeElement.style.left = (e.clientX - offsetX) + 'px';
      }
    });

  });

}


function randomColor(){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
