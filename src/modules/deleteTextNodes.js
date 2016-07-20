
//Создать модуль, который экспортирует функцию `deleteTextNodes`
//Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
//Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.

export default function deleteTextNodes (el) {
  let childs = el.childNodes;

  for(let i=0; i<childs.length; i++){

    if(childs[i].nodeType == 3){
      childs[i].remove();
      i--;
    }else if(childs[i].hasChildNodes()){
      deleteTextNodes(childs[i]);
    }

  }

}
