let fs = require("fs");

let loadStudents = () => {
  try {
    let studentsData = fs.readFileSync("grades.json").toString();
    return JSON.parse(studentsData);
  } catch {
    return `OPPS`;
  }
};

let listAllStudents = () => {
  if (typeof loadStudents() === "string") {
    console.log(
      `OPPS, There is No Students Yet, Please Add at Least One Student`
    );
  } else {
    let allStudents = loadStudents();
    allStudents.forEach((el) => {
      console.log(
        `${el.studentId} | ${el.studentName} | Total Grades >> ${el.total}`
      );
    });
  }
};

module.exports = listAllStudents;
