//Задание 6

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];
let result = true;

for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            result = false;
        }
    }
}
console.log(result);
