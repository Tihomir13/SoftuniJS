function StringSubstring(search, text) {
    text = text.toLowerCase().split(` `);
    if (text.includes(search))
        console.log(search);
    else
        console.log(`${search} not found!`);
}