/**
 * Переделать тестовое задание (аккордеон) с применением делегирования.
 * @param  {string} accordeon - элемент, на который вешается событие click
 */
export default function (accordeon) {

  document.querySelector(accordeon).addEventListener('click', function(e){

    let target = e.target;

    if (target.className == 'accordeon-title') {

      let parent = target.parentNode;
      let active = document.querySelector('.accordeon-item.active');

      if(parent.classList.contains('active')){
        parent.classList.remove('active');
      }else{
        if(active){
          active.classList.remove('active');
        }
        parent.classList.add('active');
      }

    }

  });

}
