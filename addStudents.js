const fs = require("fs");

let loadStudents = () => {
  try {
    let studentsData = fs.readFileSync("grades.json").toString();
    return JSON.parse(studentsData);
  } catch {
    return [];
  }
};

let saveToJson = (data) => {
  let arrayToJson = JSON.stringify(data);
  fs.writeFileSync("grades.json", arrayToJson);
};

let totalGrades = (grades) => {
  return grades.reduce((ac, cu) => {
    return ac + cu;
  });
};

let addStudent = (id, name, grades) => {
  let studentsData = loadStudents();
  studentsData.push({
    studentId: id,
    studentName: name,
    StudentGrades: JSON.parse(grades),
    total: totalGrades(JSON.parse(grades)),
  });
  saveToJson(studentsData);
};

module.exports = {
  addStudent,
};
