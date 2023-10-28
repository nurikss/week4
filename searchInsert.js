// У вас есть отсортированный массив уникальных целых чисел и целевое значение. Ваша задача - найти индекс 
// целевого значения в массиве, если оно там существует. Если целевого значения в массиве нет, алгоритм должен
//  вернуть индекс, в который оно могло бы быть вставлено, чтобы сохранить упорядоченность массива.

// function searchInsert(arr, num){
    // for(let i = 0; i < arr.length; i++){
        // if(arr[i] !== num){
        //     if(arr[i] - num == -1){
        //         return i + 2 + 'DD'
        //     }
        // }else if(arr.indexOf(num)){
        //     return arr.indexOf(num) + 1
        // }
        // if(arr[i] === num){
        //     return i + 1 
        // }else{ 
        //     if(arr[i] - num === -1){
        //         return i + 2 + 'aa'
        //     }
        // }

        



    // }

// }
// console.log(searchInsert([1, 2, 3, 4, 5, 6,  8], 7));

function searchInsert(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === num) {
            return mid; // Число найдено, возвращаем индекс
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left; // Число не найдено, возвращаем индекс для вставки
}

console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, ], 8));