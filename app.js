const yargs = require("yargs");
const addStudent = require("./addStudents");
const deleteStudent = require("./deleteStudent");

// Add Command >>>>
yargs.command({
  command: "add",
  describe: `Adds a New Student by it's ID Number`,
  builder: {
    studentId: {
      describe: `Unique ID of Student`,
      demandOption: true,
      type: "number",
    },
    studentName: {
      describe: `Student Name`,
      demandOption: true,
      type: "string",
    },
    studentGrades: {
      describe: `Student Grades`,
      demandOption: true,
      type: "object",
    },
  },
  handler: (arvg) => {
    addStudent.addStudent(arvg.studentId, arvg.studentName, arvg.studentGrades);
  },
});

// Delete Command >>>>
yargs.command({
  command: "delete",
  describe: `Deletes a Student by it's ID Number`,
  builder: {
    studentId: {
      describe: `Unique ID of Student`,
      demandOption: true,
      type: "number",
    },
  },
  handler: (arvg) => {
    deleteStudent.deleteStudents(arvg.studentId);
  },
});

// Read Command >>>>
yargs.command({
  command: "read",
  describe: `Get a Student Name & Grades by it's ID Number`,
  builder: {
    studentId: {
      describe: `Unique ID of Student`,
      demandOption: true,
      type: "number",
    },
  },
  handler: () => {
    console.log("read");
  },
});

// List Command >>>>
yargs.command({
  command: "list",
  describe: `Get All Student's Names & Total Grades `,
  handler: () => {
    console.log("list");
  },
});

yargs.parse();
