//Создать модуль, который экспортирует функцию `prepend`
//prepend имеет два параметра, в которые нужно передать элементы
//Задача функции - вставить второй элемент в начало первого. Например:
//`prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.

export default function prepend (container, newElement) {
  container.insertBefore(newElement,container.firstChild);
}