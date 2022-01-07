let fs = require("fs");

let loadStudents = () => {
  try {
    let studentsData = fs.readFileSync("grades.json").toString();
    return JSON.parse(studentsData);
  } catch {
    return `OPPS`;
  }
};

let getStudent = (id) => {
  if (typeof loadStudents() === "string") {
    console.log(
      `OPPS, There is No Students Yet, Please Add at Least One Student`
    );
  } else {
    let studentsData = loadStudents();
    let targetedStudent = studentsData.find((el) => el.studentId === id);
    if (targetedStudent) {
      console.log(`Student Details :
        Student ID : ${targetedStudent.studentId}
        Student Name : ${targetedStudent.studentName}
        Student Grades : < ${targetedStudent.studentGrades.join(" | ")} >
        Student Total Grades : ${targetedStudent.total}`);
    } else {
      console.log(
        `OPPS, This Student ID [[${id}]] Doesn't Exists, Please Try Again`
      );
    }
  }
};

module.exports = {
  getStudent,
};
