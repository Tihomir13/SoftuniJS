function SortanArrayby2Criteria(arr) {

    arr.sort(customAlphabeticalSort)

    function customAlphabeticalSort(a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        }
        else {
            return a.localeCompare(b);
        }
    }
    console.log(arr.join(`\n`));
}