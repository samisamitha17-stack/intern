let student = {
    name: "Samitha",
    age: 20,
    marks: 90
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}