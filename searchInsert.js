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



// function searchInsert(arr, num){
//     let left = 0
//     let right = arr.length - 1
//     for(let midle; left <= right;){
//         midle = Math.floor((right + left) / 2)

//         if(arr[midle] === num){
//             return midle
//         }else if(arr[midle] < num){
//             left = midle + 1
//         }else{
//             right = midle -1
//         }
//     }
//     return left


// }
// console.log(searchInsert([1, 4, 7, 9, 15, 27], 8));
























// Это я уже сам сделал, после того как понял как ИИ сделал его, но я его сделал на цикле for не смотря на прежний код ИИ сделаный с циклом while

// function searchInsert(arr, num){
//     let left = 0
//     let right = arr.length - 1
//     for(let mid; left <= right;){
//         mid = Math.floor((right + left) / 2)

//         if(arr[mid] === num){
//             return mid
//         }else if(arr[mid] < num){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
//     return left
// }
// console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, 9], 8));