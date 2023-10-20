function ConvertToASCII(num1, num2) {
    let num1ASCII = num1.charCodeAt();
    let num2ASCII = num2.charCodeAt();
    RANGE(num1ASCII, num2ASCII)

    function RANGE(num2ASCII, num1ASCII) {
        let ASCII = ``;
        if (num2ASCII > num1ASCII)
            for (let i = num1ASCII + 1; i < num2ASCII; i++) {
                ASCII += String.fromCharCode(i);
                ASCII += ` `;
            }
        else {
            for (let i = num2ASCII + 1; i < num1ASCII; i++) {
                ASCII += String.fromCharCode(i);
                ASCII += ` `;
            }
        }
        console.log(ASCII);
    }
}