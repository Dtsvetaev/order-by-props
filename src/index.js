// Функция для сортировки оставшихся свойств
function sortRemainingProps(remainingProps) {
    for (let i = 0; i < remainingProps.length - 1; i += 1) {
      for (let j = i + 1; j < remainingProps.length; j += 1) {
        if (remainingProps[i].key > remainingProps[j].key) {
          const temp = remainingProps[i];
          remainingProps[i] = remainingProps[j];
          remainingProps[j] = temp;
        }
      }
    }
    return remainingProps;
  }
  
  export function orderByProps(obj, order = []) {
    const result = [];
  
    // Добавляем свойства, указанные в `order`
    for (const key of order) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result.push({ key, value: obj[key] });
      }
    }
  
    // Собираем оставшиеся свойства, которых нет в `order`
    const remainingProps = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && !order.includes(key)) {
        remainingProps.push({ key, value: obj[key] });
      }
    }
  
    // Используем выделенную функцию для сортировки оставшихся свойств
    const sortedRemainingProps = sortRemainingProps(remainingProps);
  
    // Объединение результата
    return [...result, ...sortedRemainingProps];
  }
  
  
  
  
  
  
  
  
  