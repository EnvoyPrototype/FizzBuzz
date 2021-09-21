// Get fizz and buzz values from the user
// Start or controller function
function getValues() {
  //Get user values from the app.html page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  // Must validate input (parse for numbers)
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  // Validate that numbers are integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //Call logic function (fizzBuzz())
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    //Call display function (displayData())
    displayData(fbArray);
  } else {
    alert("You must enter integers");
  }
}

// Generate output from fizzValue to the buzzValue
// Logic function(s)
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];

  for (let i = 1; i <= 100; i++) {
    // Determine if divisible by fizz/buzz values, push to array
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

// Loop over returnArray and create a tablerow for each item
// Display or view function
function displayData(fbArray) {
  // Get table body element from app.html
  let tableBody = document.getElementById("results");

  // Get the template row from app.html
  let templateRow = document.getElementById("fbTemplate");

  // Clear the table on app.html
  tableBody.innerHTML = "";

  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    // Put <td> elements into array
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index + 1]);
    rowCols[1].textContent = fbArray[index + 1];

    rowCols[2].classList.add(fbArray[index + 2]);
    rowCols[2].textContent = fbArray[index + 2];

    rowCols[3].classList.add(fbArray[index + 3]);
    rowCols[3].textContent = fbArray[index + 3];

    rowCols[4].classList.add(fbArray[index + 4]);
    rowCols[4].textContent = fbArray[index + 4];

    tableBody.appendChild(tableRow);
  }
}
