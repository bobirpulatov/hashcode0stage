
/** @var number - Maximum count of slices */
let maxSlices = 19;

/** @var number - Pizza type count*/
let pizzaTypeCount = 4;

/** @var array - Slice count in each pizza */
let pizzaTypes = [2, 5, 6, 8];


// Given array
let arr = [
    [1, 4, 6, 8],
    [3, 5, 9, 1],
    [8, 7, 3, 5]
];

//
const clockwiseRotationOfArray = (arr_) => {
    let new_arr = [];

    for( let i=0; i<arr_[0].length; i++){
        let temp_storage = [];

        for( let j=0; j<arr_.length; j++){
            temp_storage.push(arr[j][i]);
        }

        new_arr.push(temp_storage.reverse());
    }

    return new_arr;
}

let result = clockwiseRotationOfArray(arr);

console.log(result);