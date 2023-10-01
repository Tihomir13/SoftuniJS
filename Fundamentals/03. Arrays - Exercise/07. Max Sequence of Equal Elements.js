function MaxSequenceofEqualElements(arr) {
  currentSequence = [];
  longestSequence = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      currentSequence.push(arr[i]);
    } else currentSequence = [arr[i]];

    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence;
    }
  }
  console.log(longestSequence.join(` `));
}
