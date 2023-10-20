function PasswordValidator(pass) {
    ps = true;
    let digits = 0;
    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        ps = false;
    }
    for (let i = 0; i < pass.length; i++) {
        if (pass[i].charCodeAt() <= 57 && pass[i].charCodeAt() >= 48 || pass[i].charCodeAt() <= 90 && pass[i].charCodeAt() >= 65 || pass[i].charCodeAt() <= 122 && pass[i].charCodeAt() >= 97) {
        } else {
            console.log("Password must consist only of letters and digits");
            ps = false;
            break;
        }
        if (pass[i].charCodeAt() <= 57 && pass[i].charCodeAt() >= 48) digits += 1;
    }
    if (digits < 2) {
        console.log("Password must have at least 2 digits");
        ps = false;
    }
    if (ps == true) console.log(`Password is valid`);
}