//Задание 7

let arr = [1, 3, .6, null, 4, .8, 67, undefined, 'a', 'b'];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
let otherCount = 0;

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
      otherCount ++;
        } else {
          if (arr[i] === 0) {
              zeroCount ++;
          } else if (arr[i] % 2 === 0) {
            evenCount ++;
        } else {
            oddCount ++;
        }
    }
}
    
  console.log(`В массиве: ${zeroCount} нулей, ${evenCount} чётных, ${oddCount} нечётных и ${otherCount} других типов`);
