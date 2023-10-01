function OnTimefortheExam(input) {
  const examHour = Number(input[0]);
  const examMinute = Number(input[1]);
  const arrivalHour = Number(input[2]);
  const arrivalMinute = Number(input[3]);

  const examTimeInMinutes = examHour * 60 + examMinute;
  const arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;

  let result = "";

  if (arrivalTimeInMinutes > examTimeInMinutes) {
    result = "Late";
    const minutesLate = arrivalTimeInMinutes - examTimeInMinutes;
    if (minutesLate >= 60) {
      const hoursLate = Math.floor(minutesLate / 60);
      const remainingMinutes = minutesLate % 60;
      result += `\n${hoursLate}:${
        remainingMinutes < 10 ? "0" : ""
      }${remainingMinutes} hours after the start`;
    } else {
      result += `\n${minutesLate} minutes after the start`;
    }
  } else if (
    arrivalTimeInMinutes === examTimeInMinutes ||
    examTimeInMinutes - arrivalTimeInMinutes <= 30
  ) {
    result = "On time";
    if (examTimeInMinutes !== arrivalTimeInMinutes) {
      const minutesEarly = examTimeInMinutes - arrivalTimeInMinutes;
      result += `\n${minutesEarly} minutes before the start`;
    }
  } else {
    result = "Early";
    const minutesEarly = examTimeInMinutes - arrivalTimeInMinutes;
    if (minutesEarly >= 60) {
      const hoursEarly = Math.floor(minutesEarly / 60);
      const remainingMinutes = minutesEarly % 60;
      result += `\n${hoursEarly}:${
        remainingMinutes < 10 ? "0" : ""
      }${remainingMinutes} hours before the start`;
    } else {
      result += `\n${minutesEarly} minutes before the start`;
    }
  }

  console.log(result);
}
