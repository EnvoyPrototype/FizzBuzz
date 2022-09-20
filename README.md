#  FIZZ BUZZ: A Coding Project 
 When it counts, you Fizz Buzz. A JavaScript coding exercise using loops. Write a program that prints the numbers from 1 to 100. For multiples of 3, display "Fizz" instead of the number, and for multiples of 5, display "Buzz." If a multiple of both, display "FizzBuzz." 

- CSS and Bootstrap Layout
- JavaScript Fundamentals
- JavaScript Loops
- JavaScript Functions
- JavaScript DOM Manipulation
- JavaScript If/Then/Else
- JavaScript Boolean Logic 

## Functions

### getValues()
Gets the FIZZ and BUZZ values from the HTML input, which are validated to make sure they're integers. If the input is valid, the fizzBuzz() function is called, which returns its value to the displayData() function to display the values in an HTML table.

### fizzBuzz()
Creates an empty array and loops through the numbers 1 to 100. The loop uses a ternary operator to determine whether each number matches the FIZZ and/or BUZZ values. The results are pushed into an array and returned to the getValues() function.

### displayData()
Creates an HTML table for the return results. Loops through and creates a table row for each item in the returnArray, five items per row.