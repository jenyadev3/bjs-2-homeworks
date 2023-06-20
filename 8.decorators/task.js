//Задача № 1
function cachingDecoratorNew(func) {
  let cache = new Map();
  let arr = [];
  let count = 0;

  return function(...args) {
    const hash = [...args];

    if(hash in cache) {
      const index = arr.indexOf(hash);
      arr.splice(index, 1);
      arr.push(hash);
      return `Из кэша: ${cache[hash]}`;
    }

    const result = func(...args);
    cache[hash] = result;
    arr.push(hash);
    count++;

    if(count > 5) {
      const oldHash = arr.shift();
      delete cache[oldHash];
      count--;
    }

    return `Вычисляем: ${result}`;
  }
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let isFirstCall = false; //   Указывает разрешено ли в данный момент вызывать функцию или нужна задержка
  
  function wrapper(...args) {
    clearTimeout(timeoutId); //  вызывается чтобы очистить предыдущий таймер, если он был установлен ранее.
    timeoutId = setTimeout( () => { // устанавливается новый таймер (вызывает исх.функцию, увеличивает счетчик для отслеживания кол-ва вызовов) 
      func(args);
      wrapper.count++;
      }, delay);

    if (!isFirstCall) {
      func(...args); 
      wrapper.count++;
      isFirstCall = true; // Устанавливается значение isTrottled в true, чтобы указать, что функция была вызвана и требуется задержка перед следующим вызовом.
    }
      wrapper.allCount++; //  увеличивает счетчик, кот. отслеживает общее количество вызовов декоратора.
    }
    // Функции wrapper добавляются свойства count и allCount для отслеживания кол-ва вызовов функции и общего кол-ва вызовов декоратора.
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper; // функция wrapper возвращается в качестве результата декоратора
}


