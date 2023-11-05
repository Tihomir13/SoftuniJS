function CompanyUsers(arr) {
    let companyEmployees = {};
    for (let element of arr) {
        let [company, employeeId] = element.split(` -> `);
        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId))
                companyEmployees[company].push(employeeId);
        }
        else
            companyEmployees[company] = [employeeId];
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeId] of entries) {
        console.log(`${company}\n-- ${employeeId.join(`\n-- `)}`);
    }
}