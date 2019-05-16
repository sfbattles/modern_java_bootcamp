function gradeTest (currentScore, totalScore) {
    if (typeof currentScore !== 'number' ||
        typeof totalScore !== 'number') {
        throw Error('GradeTest parameters invalid BOTH must be number')
    }
    let score = Math.round((currentScore / totalScore) * 100);
    console.log(score);
    let letterGrade;
    if (score >= 90) {
      letterGrade = 'A';
    }
    else if (score >= 80 && score <= 89) {
        letterGrade = 'B';
      }
      else if (score >= 70 && score <= 79) {
        letterGrade = 'C';
      }
      else if (score >= 60 && score <= 69) {
        letterGrade = 'D';
      }
      else {
        letterGrade = 'F';
      }
   let returnValue = `You got an + ${score}% which is a ${letterGrade}`;  
   return returnValue;
  }

  try {
    console.log(gradeTest('11',13));
  } catch (e) {
    console.log(e.message)
  }

