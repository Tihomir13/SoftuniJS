function DistinctArray(arr) {
    NoCoppie = [];
    for (let i = 0; i < arr.length; i++) {
        if (!NoCoppie.includes(arr[i]))
            NoCoppie.push(arr[i]);
    }
    console.log(NoCoppie.join(` `));
}