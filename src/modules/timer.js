/**
 * Создать модуль, который экспортирует функцию 'timer'.
 * Функция 'timer' должна возвращать новый промис.
 * Функция 'timer' принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состояние 'fulfilled'.
 * Пример использования:
 * timer(3000).then(() => console.log('я вывелась через 3 секунды'))
 * @param  {Integer} milisec количество секунд, через которое промис должен перейти в состояние 'fulfilled'.
 * @return {Object}  Promise
 */
export default function timer(milisec) {
  return new Promise ((resolve, reject) => {

    setTimeout(() => {
      resolve();
    }, milisec);

  });
};
