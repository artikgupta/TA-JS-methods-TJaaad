Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

-Return: Make the string uppercase on which the method toUpperCase is called.
-Example:

```js
let month = "December";
month.toUpperCase();//  "DECEMBER"

let name ="Arti"
name.toUpperCase() // "ARTI"

let book ="The hungry tide"

book.toUpperCase() // "THE HUNGRY TIDE"

toUpperCase  makes the string uppercase on which it is called.

```

3. `toLowerCase`

-Return: Make the string lowercase on which the method toLowerCase is called.
-Example:

```js
let month = "DECEMBER";
month.toLowerCase();//  "december"

let name = "ARTI"
name.toLowerCase() // "arti"

let book ="THE HUNGRY TIDE"

book.toLowerCase() // "the hungry tide"

toLowerCase  makes the string lowercase on which it is called.

```

4. `trim`

Return: the new value of the string by removing the whitespaces from both the ends.

Exapmle:

```js
let vehicle = " car ";

vehicle.trim(); // "car"

let car = "  Maruti  ";
car.trim(); // "Maruti"

let month = " March ";

month.trim(); // "March"
```

5. `trimEnd`

return : returns the value of the string by triming the white spaces from the end.

Example:

```js
let vehicle = " car ";

vehicle.trimEnd(); // " car"

let car = "  Maruti  ";
car.trimEnd(); // " Maruti"

let month = "  March ";

month.trimEnd(); // "  March"
```

6. `trimStart`

return : returns the value of the string by triming the white spaces from the start.

Example:

```js
let vehicle = " car ";

vehicle.trimEnd(); // "car "

let car = "  Maruti  ";
car.trimEnd(); // "Maruti "

let month = "  March ";

month.trimEnd(); // "March "
```

7. `concat`

Parameter: (string) another string that will be concated (string data type)

Return :

returns a new value by concating both the strings

Example:

```js
let str1 = "Rome was not";

let str2 = "built in a day";

str1.concat(" ", str2); // "Rome was not built in a day"
```

8. `endsWith`

Parameter: accepts the character that we are looking for at the end of the string

Return: returns a boolean value( i.e.) true if the character we looking for matches or false if it does not

Example"

let

```js
let month = February;
month.endsWith(y); // true
```

9. `includes`

Parameter: a string we are looking for in different string

Return : returns a boolean value( i.e.) true if the string we looking for includes or false if it does not

```js
let str1 = "Once in a blue moon";

let str2 = "moon";

str1.includes(str2); //true
```

10. `indexOf`

Parameter: accepts search value (string data type)

Return : index of the first occurence of the word we are looking for.

Example:

```js
let str = "To kill two birds with one stone";

str.indexOf("with"); // 18
```

11. `lastIndexOf`

Parameter: accepts search value (string data type)

Return : index of the last occurence of the search value

Example:

```js
let str = "To kill two birds with one stone";

str.lastIndexOf("one"); // 29
```

12. `padEnd`

Parameter: total length, total length of the string which it will return after padding has been applied

padStr: The str to pad with current str.

Return : A string with the total lenght , with padStr applied at the end.

Example:

```js
let num = "800";

num.padEnd(6, "3"); // "800333"
```

13. `padStart`

Parameter: total length, total length of the string which it will return after padding has been applied

padStr: The str to pad with current str.

Return : A string with the total lenght , with padStr applied at the start.

Example:

```js
let num = "800";

num.padStart(6, "3"); // "333800"
```

14. `repeat`

Parameter: An integer between 0 and +Infinity, indicating the number of times to repeat the string.

Return : A new string with the repeated number of values

Example:

```js
let num = "Arti";

num.repeat(6); // "ArtiArtiArtiArtiArtiArti""ArtiArtiArtiArtiArtiArti"
```

15. `replace`

Parameter: accepts a string that is to be replaced by new string.

Return : a new replaced string

Example:

```js
let num = "800";

num.replace("800", "3"); // 3
```

16. `slice`

Parameter: total length, total length of the string which it will return after padding has been applied

padStr: The str to pad with current str.

Return : A string with the total lenght , with padStr applied at the end.

Example:

```js
let num = "800";

num.padEnd(6, "3");
```

17. `split`

Parameter: total length, total length of the string which it will return after padding has been applied

Return : An Array of strings, split at each point where the separator occurs in the given string.

Example:

```js
let num = "800";

num.split(""); // ["8", "0", "0"]
```

18. `substring`

Example:

```js

```
