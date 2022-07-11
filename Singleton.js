// Реалізація паттерну Одинак 
const counterModule = (function () {
  let instance,
      counter = 0;

  const getCounter = () => {
    return counter;
  }

  const increaseCounter = () => {
    counter ++;
  }

  const createInstance = () => {
    return {
      getCounter, 
      increaseCounter
    }
  }

  return {
    getInstance: function () {
      // Створюємо екземпляр класу, якщо він не існує, або повертаємо посилання на існуючий
      return instance || (instance = createInstance());
    }
  }
})();


console.log(counterModule.getInstance() === counterModule.getInstance()); // Очікуємо true