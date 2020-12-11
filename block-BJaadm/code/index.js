let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((v) => v.sex);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((v) => v.grade);

console.log(peopleGrade, "PG");

// Create an array peopleSex and store the value of sex key from persons array

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(
  persons.filter((v) => v.name.startsWith("J") || v.name.startsWith("P"))
);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(
  persons.filter((v) => v.name.startsWith("A") || v.name.startsWith("C"))
);

// Log all the filtered male ('M') in persons array

console.log(persons.filter((v) => v.sex === "M"));

// Log all the filtered female ('F') in persons array

let filteredFemale = persons.filter((v) => v.sex === "F");
console.log(filteredFemale);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femaleNameWithCorJ = filteredFemale.filter(
  (v) => v.name.startsWith("C") || v.name.startsWith("J")
);

console.log(femaleNameWithCorJ);

// Log all the even numbers from peopleGrade array

let evenGrade = peopleGrade.filter((v) => v % 2 == 0);

console.log(evenGrade);

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.find((person) => person.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.find((person) => person.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let val = persons.filter((v) => {
  v.name.startsWith("J") && persons.grade > 10 && persons.sex === "F";
});

// Filter all the female from persons array and store in femalePersons array

// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.reduce((acc, cv) => acc + cv.grade, 0);

console.log(gradeTotal);

// Find the average grade

let averageGrade = gradeTotal / peopleGrade.length;

console.log(averageGrade);

// Find the average grade of male

let avgMaleGrade = persons
  .filter((v) => v === "M")
  .map((people) => people.grade);

avgMaleGrade.reduce((a, c) => {
  return a + c;
}, 0) / avgMaleGrade.length;

// Find the average grade of female

let avgFemaleGrade = persons
  .filter((v) => v === "M")
  .map((people) => people.grade);

avgFemaleGrade.reduce((a, c) => {
  return a + c;
}, 0) / avgFemaleGrade.length;

// Find the highest grade

[...peopleGrade].sort((a, b) => a - b).pop();

// Find the highest grade in male

[...avgMaleGrade].sort((a, b) => a - b).pop();

// Find the highest grade in female

[...avgFemaleGrade].sort((a, b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'

let personWithJorP = persons.filter(
  (v) => v.name.startsWith("J") || v.name.startsWith("P")
);

let gradeOfJorP = personWithJorP.map((v) => v.grade);

[...gradeOfJorP].sort((a, b) => a - b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a, b) => a - b);
// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let sortedGrade = [...peopleGrade].sort((a, b) => a - b);

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();
