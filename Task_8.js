//Задание 8

let myMap = new Map();

myMap.set ('a', 'string');
myMap.set ('b', 'string');
myMap.set ('5', 'number');
myMap.set ('true', 'boolean');
  
for (let name of myMap.keys()){
    console.log(`Ключ - ${name}`);
}
for (let prop of myMap.values()){
    console.log(`Значение - ${prop}`);
}