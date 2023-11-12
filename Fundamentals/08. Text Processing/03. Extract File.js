function ExtractFile(path) {
    let fileInfo = path.split(`\\`).pop();
    fileInfo = fileInfo.split(``).reverse();

    let indexOfFile = fileInfo.indexOf(`.`);
    let fileType = fileInfo.slice(0, indexOfFile).reverse().join(``);
    let fileName = fileInfo.slice(indexOfFile + 1).reverse().join(``);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);
}