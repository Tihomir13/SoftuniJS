function SearchForANumber(arr, arr1) {
    arr = arr.splice(0, arr1[0]);
    for (let i = 0; i < arr1[1]; i++) {
        arr.shift();
    }
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr1[2])
            counter++;
    }
    console.log(`Number ${arr1[2]} occurs ${counter} times.`);
}
