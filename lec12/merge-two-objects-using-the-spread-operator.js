let student = {
    name: "Samitha",
    age: 20
};

let details = {
    marks: 90,
    city: "Coimbatore"
};

let result = { ...student, ...details };

console.log(result);