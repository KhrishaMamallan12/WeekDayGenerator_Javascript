const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a date in the format dd-mm-yyyy
rl.question("Enter a date (dd-mm-yyyy): ", (inputDate) => {
  // Extract day, month, and year from the input date
  let [day, month, year] = inputDate.split("-");

  // Create a new Date object using the provided date
  let date = new Date(`${month}/${day}/${year}`);

  // Get the day of the week from the Date object (0: Sunday, 1: Monday, ..., 6: Saturday)
  let dayOfWeek = date.getDay();

  // Convert the day of the week to its corresponding name
  let dayName;
  switch (dayOfWeek) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
      break;
  }

  // Output the resulting day of the week
  console.log(dayName);

  rl.close();
});
