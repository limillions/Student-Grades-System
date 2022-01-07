let fs = require("fs");

let loadStudents = () => {
  try {
    let studentsData = fs.readFileSync("grades.json").toString();
    return JSON.parse(studentsData);
  } catch {
    return `OPPS, There is No Students Yet, Please Add at Least One Student`;
  }
};

let saveToJson = (data) => {
  let arrayToJson = JSON.stringify(data);
  fs.writeFileSync("grades.json", arrayToJson);
};

let deleteStudents = (id) => {
  let studentsData = loadStudents();
  let deletedStudents = studentsData.filter((el) => el.studentId === id);

  if (deletedStudents.length !== 0) {
    studentsData.splice(studentsData.indexOf(deletedStudents[0]), 1);
    saveToJson(studentsData);
    console.log(
      `DONE, Student [ ${deletedStudents[0].studentName} ] Deleted Successfully `
    );
  } else {
    console.log(
      `OPPS, This Student ID [[${id}]] Doesn't Exists, Please Try Again`
    );
  }
};

module.exports = {
  deleteStudents,
};
