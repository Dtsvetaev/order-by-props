import { orderByProps } from '../index';

test('sort properties by given order', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['name', 'level'];
  
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]);
});

test('sort properties when order is empty', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

  const result = orderByProps(obj, []);

  expect(result).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }
  ]);
});

test('empty object', () => {
  const result = orderByProps({}, ['name', 'level']);
  expect(result).toEqual([]);
});

test('partial order match with extra properties', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['name', 'nonexistent', 'level'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]);
});

test('some keys from order present in object', () => {
  const obj = { name: 'мечник', health: 10, level: 2 };
  const order = ['name', 'nonexistent'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 }
  ]);
});

test('all keys in order match object properties exactly', () => {
  const obj = { name: 'мечник', level: 2, health: 10 };
  const order = ['name', 'level', 'health'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 }
  ]);
});

test('property with empty value', () => {
  const obj = { name: 'мечник', health: 10, level: 0 };
  const order = ['name', 'level'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 0 },
    { key: 'health', value: 10 }
  ]);
});

test('properties not in order with unique values', () => {
  const obj = { health: 20, name: 'мечник', level: 10, speed: 15 };
  const order = ['name', 'level'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 10 },
    { key: 'health', value: 20 },
    { key: 'speed', value: 15 }
  ]);
});

test('call without order argument', () => {
  const obj = { name: 'мечник', health: 10, level: 2 };
  
  const result = orderByProps(obj);

  expect(result).toEqual([
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }
  ]);
});
