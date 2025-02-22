// // example of fs module

const fs = require("fs");

try {
    // Read the main file containing filenames
    const data = fs.readFileSync('record.txt', 'utf-8');
    // console.log("Type of data: ", typeof data);

    let res = 0;

    // Iterate through the string to extract each filename
    for (let i = 0; i <= data.length; i++) {
        if (data[i] === '\n' || i === data.length) {
            const name = data.slice(res, i).trim(); // Trim to remove extra spaces or newlines
            res = i + 1;

            if (name) {
                console.log("Filename: ", name);

                try {
                    // Read the content of each file
                    const fileData = fs.readFileSync(name, 'utf-8');
                    console.log("Content of file:", fileData);
                } catch (err) {
                    console.error(`Error reading file ${name}:`, err.message);
                }
            }
        }
    }
} catch (err) {
    console.error("Error reading record.txt:", err.message);
}
