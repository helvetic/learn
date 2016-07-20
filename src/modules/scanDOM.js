/*Создать модуль, который экспортирует функцию `scanDOM`.
`scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
Тэгов div: 10
Тэгов a: 5
Тэгов span: 10
Текстовых узлов: 100
Элементов с классом c1: 10
Элементов с классом c2: 20

Количеств и название классов/тегов заранее неизвестно. Функция сама должна определить количество и название тегов/классов.*/



export default function scanDOM () {

  let root = document.body;
  let childs = root.childNodes;

  let data = {
    tag: {},
    text: 0,
    classes: {}
  };

  data = scaner(childs, data);

  displayScan(data);

}



function scaner (childs, data){
  for(let i=0; i<childs.length; i++){
    switch(childs[i].nodeType) {

      case 1:

        if(!data.tag[childs[i].localName]++){
          data.tag[childs[i].localName] = 1;
        }

        if(childs[i].className != ''){
          if(!data.classes[childs[i].className]++){
            data.classes[childs[i].className] = 1;
          }
        }

        if(childs[i].hasChildNodes()){
          scaner(childs[i],data);
        }
        break;

      case 3:
        data.text++;
        break;
    }
  }

  return data;
}


function displayScan(data){
  for (let tag in data.tag) {
    if (data.tag.hasOwnProperty(tag)) {
      console.log(`Тэгов ${tag}: ${data.tag[tag]}`);
    }
  }

  console.log(`Текстовых узлов: ${data.text}`);

  for (let classname in data.classes) {
    if (data.classes.hasOwnProperty(classname)) {
      console.log(`Элементов с классом '${classname}': ${data.classes[classname]}`);
    }
  }
}
