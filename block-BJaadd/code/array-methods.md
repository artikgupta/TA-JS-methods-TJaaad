Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: (seperator) by which we will join the array.
   - Return: a string with all the array joined by the seperator
   - Example:

   ```js
   let val1 = ["Red", "Green", "Blue"];
   val1.join(); // "Red,Green,Blue"

   let val1 = ["Red", "Green", "Blue"];
   val1.join("-"); // "Red-Green-Blue"

   let val1 = ["Red", "Green", "Blue"];
   val1.join(" "); // "Red Green Blue"
   ```

   - `join` accepts a seperator by which it joins the array and returns it as a string joined by that seperator.
   - No, it does not mutate the original array.

3. `flat`

   - Parameter: n (number data type ) , the layer untill which we wants to flatten the nested array.
   - Return: new array with nested array concanated into it.
   - Example:

   ```js
   let arr = [1, 2, [3, 4, [5, 6]]];
   arr.flat(3); // [1, 2, 3, 4, 5, 6]
   ```

   - `flat` accepts a value , which specifies the layer untill which we want to flatten the array and returns a new array which the nested array concatenated with it.
   - No,it does not mutates the original array.

4. `push`

- Parameter: the value to be added at the end of the array.
- Return: the length of the array ,that we will get after pushing the value at the end.
- Example:

```js
let array = [1, 2, 3, 4, 5];
array.push(6); // 6

let val = ["Arti", "Ganesh", "Kate"];
val.push("John"); // 4
```

- `push` accepts the value which is to be added to the array and returns the length of the new array
- Yes, it mutates the original array.

5. `indexOf`

- Parameter: element, which we will look in the array.
- Return: the index of that element if that elements exists in that array, -1 if it does not.
- Example:

```js
let array = [1, 2, 3, 4, 6, 7, 8, 9];
array.indexOf(4); // 3
```

6. `lastIndexOf`

- Parameter: accepts the element whose last Index we are looking for.
- Return: the index of the item where it last appeared.
- Example:

```js
let array = ["Orange", "Mango", "Guava", "Pineapple", "Orange"];
array.lastIndexOf("Orange"); //4
```

7. `includes`

- Parameter: value , which we want to check if it is in the array
- Return: (boolean data type), true if the is present in the array, false if not.
- Example:

```js
let val = ["Dog", "Cat", "Monkey"];
val.includes("Cat"); // true
```

- `includes` accepts a value which we are looking for returns true if it exists in the array and false if it doesnot.
- It doesnot mutates the original array.

8. `reverse`

- Return: the reversed array.
- Example:

```js
let arr = [1, 2, 3, 4];
arr.reverse(); // [4, 3, 2, 1]
```

9. `every`

- Parameter: a callback function which accepts three parameters (currentElement, ).
- Return: a boolean value true if the callback function returns a truthy value for every element.
- Example:

```js
let array = [1, 2, 3, 4, 5];
array.every((val) => val < 6); // true
```

- It doesnot mutate the original array.

10. `shift`

- Return: the first element that has been removed from the array
- Example:

```js
let array = [1, 2, 3, 4, 6];
array.shift(); // 1
```

- It mutates the original array.

11. `splice`

- Parameter: three values, first the index from which we wants to change the array, deleteCount(upto which we want to delete), newElement( this is optional), the element to add to the array.
- Return: the modified array, after deleting or adding the items
- Example:

```js
let array = [1, 2, 3, 4, 5];
array.splice(0);
// [1, 2, 3, 4, 5]
let array = [1, 2, 3, 4, 5];
array.splice(0, 1); // [1];
let array = [1, 2, 3, 4, 5];
array.splice(0, 4);
// [1, 2, 3, 4]
let array = [1, 2, 3, 4, 5];
array.splice(0, 4, 9);
//[9, 5]
```

- It mutates the original array.

12. `find`

- Parameter: a callback function which accepts three parameter.
- Return: The value of the first element in the array that satisfies the conditions passed in the cb function.
- Example:

```js
let array = [5, 7, 888, 97, 33];
array.find((value) => value > 50); // 888
```

- It does not mutates the original array.

13. `unshift`

- Parameter: the element to be added at the beginning of the array.
- Return: an array with the newly added value at the beginning of it.
- Example:

```js
let array = [2, 3, 4, 5];
array.unshift(1); // [1, 2, 3, 4, 5]
```

- It mutates the original array

14. `findIndex`

- Parameter: a callback function which accepts three parameter.
- Return: index of the first item which justify the condition passed in the cb
- Example:

```js
let array = [33, 44, 56, 76, 88, 65];
array.findIndexOf((val) => val > 50); //2
```

- It doesnot mutates the original array.

15. `filter`

- Parameter: accepts a callback function, which accepts three parameter.
- Return: a new array with the value that has satisfied the conditions of cb
- Example:

```js
let numbers = [1, 2, 3, 4, 5];

numbers.filter((val) => val > 2); // [3, 4, 5]
```

- It does not mutates the original array.

16. `flat`

- Parameter:
- Return:
- Example:

17. `forEach`

- Parameter: accepts a callback function, which accepts three parameter.
- Return: undefined
- Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((number) => console.log(number * 2));
// 2
// 4;
// 6;
// 8;
// 10;
// 12;
// 14;
```

forEach returns value for each element.

18. `map`

- Parameter: accepts a callback function, which accepts three parameter.
- Return: new array with new values, which we get after fulfulling the condition applied in the cb
- Example:

```js
let numbers = [1, 2, 3, 4, 5];
numbers.map((val) => val * 5); // [5, 10, 15, 20, 25]
```

- It does not mutates the original array.

19. `pop`

- Return: the last element of the array
- Example:

```js
let fruits = ["Mango", "Orange", "Apple", "Grapes", "Strawberry"];
fruits.pop(); // "Strawberry"
```

- It mutates the original array.

20. `reduce`

- Parameter: accepts a callback to which we can pass four values (accumulator,Current Value,Index, Array)
- Return: a value after reducing it.
- Example:

```js
let numbers = [1, 2, 3, 4, 5, 6];

numbers.reduce((a, b) => a + b); // 21
```

- It does not mutate the original array

21. `slice`

- Parameter: start index and the end index
- Return:A new array containing the extracted elements.
- Example:

```js
let fruits = ["Mango", "Orange", "Apple", "Grapes", "Strawberry"];
fruits.slice(0); // ["Mango", "Orange", "Apple", "Grapes", "Strawberry"]

let fruits = ["Mango", "Orange", "Apple", "Grapes", "Strawberry"];
fruits.slice(0, 3);
// ["Mango", "Orange", "Apple"]
```

22. `some`

- Parameter: a callback function which accepts three parameters (currentElement,index array ).
- Return: a boolean value true if the callback function returns a truthy value for any element.
- Example:

```js
let array = [1, 2, 3, 4, 5];
array.some((val) => val < 6); // true
```

- It doesnot mutate the original array.
