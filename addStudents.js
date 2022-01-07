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
  let duplicatedId = studentsData.filter((el) => {
    return el.studentId === id;
  });
  if (duplicatedId.length === 0) {
    studentsData.push({
      studentId: id,
      studentName: name,
      studentGrades: JSON.parse(grades),
      total: totalGrades(JSON.parse(grades)),
    });
    console.log(`DONE, Student Added Successfully `);
  } else {
    console.log(`OPPS, This Student's ID Already Exists !`);
  };

  saveToJson(studentsData);
};

module.exports = {
  addStudent,
};
