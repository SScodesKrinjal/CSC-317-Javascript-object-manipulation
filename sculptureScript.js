const sculptureList = require('./data.js'); // Ensure the correct import

// Ensure sculptureList is an array before using forEach
if (!Array.isArray(sculptureList)) {
    console.error("Error: sculptureList is not an array. Check your data.js file.");
    process.exit(1);
}

// Create an empty object to store the lengths
const sculptureListLengths = {};

// Loop through each sculpture object in sculptureList
sculptureList.forEach((sculpture, index) => {
    const lengths = {};
    for (let key in sculpture) {
        if (typeof sculpture[key] === 'string') {
            lengths[key] = sculpture[key].length;
        }
    }
    sculptureListLengths[index] = lengths;
});

// Log the result
console.log(sculptureListLengths);
