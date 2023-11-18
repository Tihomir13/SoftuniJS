function ReplaceRepeatingCharts(str) {
    let NotRepeatStr = '';
    let prevChar = '';

    for (const currentChar of str) {
        if (currentChar !== prevChar) {
            NotRepeatStr += currentChar;
            prevChar = currentChar;
        }
    }
    console.log(NotRepeatStr);
}