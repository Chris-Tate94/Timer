const args = process.argv.slice(2);
// check if the array is empty
if (args.length === 0) {
  return console.log("no input");
}

for (let numbers of args) {
  // set the elements in the array to numbers
  let beepInterval = Number(numbers);
  // if the input is NaN, return an error
  if (isNaN(beepInterval)) {
    console.error("NOT A NUMBER");
  } // if the number is less than or equal to 0, log an error
  else if (beepInterval <= 0) {
    console.log("enter positive number ");
  } else {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, beepInterval * 1000);
  }
}
