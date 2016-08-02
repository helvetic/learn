/**
 * Создать страницу с кнопкой. При клике на кнопку, на странице должен создаваться div произвольных размеров, в произвольном месте.
 * Цвет фона div'а должен быть каждый раз случайным.
 * Созданные div'ы можно перетаскивать мышкой (drag & drop)
 * @param  {string} btn - кнопка, на которую вешается событие click
 */
export class Dnd{

  constructor(btn){
    this.highestSize = 400;
    this.lowestSize = 50;
    this.bodyHeight = document.body.clientHeight;
    this.bodyWidth = document.body.clientWidth;
    this.squaresData = [];

    document.querySelector(btn).addEventListener('click', () => {
      let {highestSize,lowestSize,bodyHeight,bodyWidth} = this;
      let height = randomNumber(highestSize, lowestSize),
          width = randomNumber(highestSize, lowestSize);
      let obj = {
        bg: randomColor(),
        width: width + "px",
        height: height + "px",
        top: randomNumber(0, bodyHeight - height) + "px",
        left: randomNumber(0, bodyWidth - width) + "px"
      };
      this.createSquare(obj);
    });
  }

  createSquare(obj){
    let sq = document.createElement('div');

    this.squaresData.push(obj);

    sq.className = 'drag-square';
    sq.style.backgroundColor = obj.bg;
    sq.style.width = obj.width;
    sq.style.height = obj.height;
    sq.style.top = obj.top;
    sq.style.left = obj.left;

    document.body.appendChild(sq);


    let activeElement,
        offsetX = 0,
        offsetY = 0;

    sq.addEventListener('mousedown', function(e){
      activeElement = e.target;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      activeElement.classList.add('active');
    });

    sq.addEventListener('mouseup', function(e){
      activeElement.classList.remove('active');
      activeElement = null;
    });

    sq.addEventListener('mousemove', function(e){
      if (activeElement != null) {
        activeElement.style.top = (e.clientY - offsetY) + 'px';
        activeElement.style.left = (e.clientX - offsetX) + 'px';
      }
    });

    return this.squaresData;
  }
}

function randomColor(){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// /* old */
// export default function (btn) {
//
//   let highestSize = 400,
//       lowestSize = 50,
//       bodyHeight = document.body.clientHeight,
//       bodyWidth = document.body.clientWidth,
//       squaresData = [];
//
//
//   document.querySelector(btn).addEventListener('click', function(){
//
//     let sq = document.createElement('div'),
//         height = randomNumber(highestSize, lowestSize),
//         width = randomNumber(highestSize, lowestSize);
//
//     let obj = {
//       bg: randomColor(),
//       width: width + "px",
//       height: height + "px",
//       top: randomNumber(0, bodyHeight - height) + "px",
//       left: randomNumber(0, bodyWidth - width) + "px"
//     };
//     squaresData.push(obj);
//
//     sq.className = 'drag-square';
//     sq.style.backgroundColor = obj.bg;
//     sq.style.width = obj.width;
//     sq.style.height = obj.height;
//     sq.style.top = obj.top;
//     sq.style.left = obj.left;
//
//     document.body.appendChild(sq);
//
//
//     let activeElement,
//         offsetX = 0,
//         offsetY = 0;
//
//     sq.addEventListener('mousedown', function(e){
//       activeElement = e.target;
//       offsetX = e.offsetX;
//       offsetY = e.offsetY;
//       activeElement.classList.add('active');
//     });
//
//     sq.addEventListener('mouseup', function(e){
//       activeElement.classList.remove('active');
//       activeElement = null;
//     });
//
//     sq.addEventListener('mousemove', function(e){
//       if (activeElement != null) {
//         activeElement.style.top = (e.clientY - offsetY) + 'px';
//         activeElement.style.left = (e.clientX - offsetX) + 'px';
//       }
//     });
//
//   });
//
//   return squaresData;
// }
