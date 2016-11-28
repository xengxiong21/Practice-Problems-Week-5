
// Funtion to convert grade percentage to a letter grade

function LetterGrade(){

  var gradePercent = Number(prompt("Please enter the precentage"));

  switch(true){
    case (gradePercent === 100):
      document.write("A+");
      break;
    case (gradePercent >= 93 && gradePercent <= 99.9):
      document.write("A");
      break;
    case (gradePercent >= 90 && gradePercent <= 92.9):
      document.write("A-");
      break;
    case (gradePercent >= 87 && gradePercent <= 89.9):
      document.write("B+");
      break;
    case (gradePercent >= 83 && gradePercent <= 86.9):
      document.write("B");
      break;
    case (gradePercent >= 80 && gradePercent <= 82.9):
      document.write("B-");
      break;
    case (gradePercent >= 77 && gradePercent <= 79.9):
      document.write("C+");
      break;
    case (gradePercent >= 73 && gradePercent <= 79.9):
      document.write("C");
      break;
    case (gradePercent >= 70 && gradePercent <= 72.9):
      document.write("C-");
      break;
    case (gradePercent >= 69 && gradePercent <= 69.9):
      document.write("D+");
      break;
    case (gradePercent >= 68 && gradePercent <= 68.9):
      document.write("D");
      break;
    case (gradePercent >= 67 && gradePercent <= 67.9):
      document.write("D-");
      break;
    case (gradePercent >= 0 && gradePercent <= 66.9):
      document.write("F");
      break;
    }
  }
