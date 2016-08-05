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

  new Promise ((resolve, reject) => {
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
    return new Promise (resolve => {
      let source = entry_template.innerHTML;
      let template = Handlebars.compile(source);
      let citiesList = JSON.parse(responseText);
      let data = {
        cities: citiesList
      };
      cities_container.innerHTML = template(data);

      cities_filter.addEventListener('keyup', function(){
        let newCitiesList = citiesList.filter(city => {
          return city.name.toLowerCase().includes(this.value);
        });
        data.cities = newCitiesList;
        cities_container.innerHTML = template(data);
      });

    });
  });
};
