function CutAndReverse(firstHalf) {
    let secondHalf = firstHalf.substring((firstHalf.length / 2))
    firstHalf = firstHalf.substring(0, (firstHalf.length / 2));

    console.log(firstHalf.split(``).reverse().join(``));
    console.log(secondHalf.split(``).reverse().join(``));
}