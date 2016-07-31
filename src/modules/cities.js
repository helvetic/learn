/**
 * Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
 * Отсортировать города по алфавиту и вывести на странице.
 * Использование промисов обязательно.
 * Запрещено использование любых библиотек (включая jQuery) и фреймворков.
 *
 * Создать страничку с текстовым полем.
 * После загрузки странички, загрузить список городов при помощи AJAX.
 * При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых есть введенный текст.
 * Использование промисов обязательно.
 * Запрещено использование любых библиотек (включая jQuery) и фреймворков.
 *
 * @return {[type]} [description]
 */
export default function cities(url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json') {
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      resolve(xhr.responseText);
    });
    xhr.addEventListener('error', () => {
      reject();
    });
    xhr.send();



  }).then((responseText) => {
    return new Promise((resolve, reject) => {
      let citiesList = JSON.parse(responseText);

      citiesList.sort( function( a, b ) {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a<b?-1:a>b?1:0;
      });

      pasteCitiesList(citiesList);
      resolve(citiesList);
    });



  }).then((citiesList) => {
    return new Promise((resolve, reject) => {
      cities_filter.addEventListener('keyup', function(){

        let newCitiesList = [];

        for ({name} of citiesList) {
          if(name.toLowerCase().includes(this.value)){
            newCitiesList.push({
              'name': name
            });
          }
        }

        pasteCitiesList(newCitiesList);

      });
    });
  });


};


function pasteCitiesList(citiesList){
  let citiesListHTML = '';
  for ({name} of citiesList) {
    citiesListHTML += `<li>${name}</li>\n`;
  }
  cities_container.innerHTML = citiesListHTML;
}
