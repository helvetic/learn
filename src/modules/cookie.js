/**
 *
 Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
 Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

 К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
 Список текстовых полей:
 - имя
 - значение
 - срок годности (количество дней)

 После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.

 После добавление cookie, значения текстовых полей формы должны быть очищены.
 Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
 Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы
 */
export function cookie() {

  let cookieTable = drawCookieTable();

  cookieTable.addEventListener('click', function(e){
    if(e.target.dataset.action == 'delete'){
      if(deleteCookie(e.target.dataset.cookie)){
        e.target.parentNode.parentNode.remove();
      }
    }
  });

  add_cookie_form.addEventListener('submit', function(e){
    e.preventDefault();

    let obj = {};

    for (let {localName, name, value} of this) {
      if(localName == 'input'){

        if(value === ''){
          alert('Заполните все поля');
          return;
        }else{
          obj[name] = value;
        }

      }
    }

    addCookie(obj['cookie-name'],obj['cookie-value'],obj['cookie-expires']);
  });
}



export function setCookie(name, value, options = ''){
  let optionsSeparator = (options) ? '; ' : '';
  document.cookie = `${name}=${value}${optionsSeparator}${options}`;
}



export function getCookie(name) {
  let result = document.cookie.split('; ').find((cookieRow) => {
    let cookieRowArray = cookieRow.split('=');
    if(cookieRowArray[0] == name){
      return cookieRowArray[1];
    }
  });
  if(result){
    return result.split('=')[1];
  }
}



function drawCookieTable() {
  let cookieArray = cookieSplit();
  let cookieRows = cookieToTable(cookieArray);
  let cookieTable = document.createElement('table');

  cookieTable.innerHTML = cookieRows;
  cookieTable.setAttribute("id", "cookie_table");
  document.body.appendChild(cookieTable);

  return cookieTable;
}



function cookieSplit() {
  let cookieArray = [];

  document.cookie.split('; ').forEach((cookieRow) => {
    let cookieRowArray = cookieRow.split('=');
    let obj = {
      'key': cookieRowArray[0],
      'val': cookieRowArray[1]
    };
    cookieArray.push(obj);
  });

  return cookieArray;
}



function cookieToTable(cookieArray){
  let cookieRows = '';

  cookieArray.forEach((cookieRow) => {
    cookieRows += '<tr>';
    cookieRows += `<td>${cookieRow.key}</td>`;
    cookieRows += `<td>${cookieRow.val}</td>`;
    cookieRows += `<td><button data-action="delete" data-cookie="${cookieRow.key}">X</button></td>`;
    cookieRows += '</tr>';
  });

  return cookieRows;
}



function addCookie(name, value, expires){
  let date = new Date;
  date.setDate(date.getDate() + Number(expires));
  setCookie(name, value, `expires=${date.toUTCString()}`);
  cookie_table.remove();
  drawCookieTable();
}



function deleteCookie(name){
  if(confirm(`Удалить ${name}?`)){
    let date = new Date(0);
    date = date.toUTCString();
    document.cookie = `${name}=; path=/; expires=${date}`;
    console.log(`${name}=; path=/; expires=${date}`);
    return true;
  }
}
