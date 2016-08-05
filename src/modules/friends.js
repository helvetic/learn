/*
Создать приложение для ВКонтакте, которое загружает список ваших друзей и выводит их на страницу в следующем формате: Фото, ФИО, Возраст, Дата рождения.
Друзья должны быть отсортированы по дате рождения в порядке убывания. То есть на самом верху списка расположен друг с ближайший датой рождения.
Использование шаблонизатора приветствуется.
 */
export default class VKFriends{
  constructor(){
    console.info('VK FRIENDS');
    new Promise((resolve, reject) => {
      VK.init({apiId: 5575450});
      VK.Auth.login(function(response) {
         if (response.session) {
           resolve(response);
         } else {
           reject('Не удалось авторизоваться');
         }
       }, 2);


    }).then(responseObj => {
      console.log('Статус',responseObj);
      return new Promise(resolve => {
        VK.api('friends.get',
           {
             fields: 'bdate, city, country, photo_100'
           },
           response => {
             resolve(response);
           }
        );
      })


    }).then(friendsList => {
      let nowDate = new Date();
      let friends = friendsList.response;

      console.log('Друзья',friends);

      friendsList.current = {};
      friendsList.current.day = nowDate.getDay();
      friendsList.current.month = nowDate.getMonth();

      friends.sort(sortJSON);
      let startPos = friends.findIndex(el => {
        let elDate = el.bdate.split('.', 2);
        if(elDate[1] >= friendsList.current.month && elDate[0] >= friendsList.current.day){
          return true;
        }
      });
      let undefinedPos = friends.findIndex(el => {
        if(!el.bdate){
          return true;
        }
      });

      let startFriends = friends.slice(startPos,undefinedPos);
      let nextFriends = friends.slice(0,startPos);
      let undefinedFriends = friends.slice(undefinedPos);

      friendsList.sortedFriends = startFriends.concat(nextFriends,undefinedFriends);
      console.log('Друзья отсортированные',friendsList.sortedFriends);

      let source = friends_template.innerHTML;
      let template = Handlebars.compile(source);
      vk_friends.innerHTML = template(friendsList);
    });

  }
}


function sortJSON(aObj, bObj){
  let a = getArrayFromDateStr(aObj.bdate);
  let b = getArrayFromDateStr(bObj.bdate);

  if(a[1] === b[1]){
    return a[0] - b[0];
  }else{
    return a[1] - b[1];
  }
}

function getArrayFromDateStr(str = '0.13'){
  return str.split('.');
}
