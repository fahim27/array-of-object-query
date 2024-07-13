# array-of-object-query

`array-of-object-query` is a simple JavaScript library that makes working with arrays of objects easier. It has some methods to help you filter, sort, group, and summarize data. Use this library to make handling complex data structures simple and efficient.

## Installation

To install this package, simply run the following command with [npm](https://www.npmjs.com/):

```
$ npm install array-of-object-query
```

## Usage

To use the custom array methods provided by the `array-of-object-query` package, just import the methods:

```javascript
import arrayQuires from "array-of-object-query";
```

## Apply the Methods

After import the method, you can apply the methods directly to your arrays of objects. Here's an example using the `where` method:

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 34, occupation: "Designer" },
  { name: "Charlie", age: 25, occupation: "Teacher" },
];

// Example usage of where method
const engineers = people.where("occupation", "Engineer");
console.log(engineers);
// Output: [{ name: 'Alice', age: 28, occupation: 'Engineer' }]
```

## Available Methods

All of the available methods are provided below

- [where](#where)
- [whereIn](#whereIn)
- [select](#select)
- [pluck](#pluck)
- [orderBy](#orderBy)
- [first](#first)
- [last](#last)
- [min](#min)
- [max](#max)
- [take](#take)
- [sum](#sum)
- [average](#average)
- [groupBy](#groupBy)
- [unique](#unique)
- [distinct](#distinct)

## <a name="where"></a> where(key, value)

**Description**

Filters the array based on key-value pairs.

**Parameters**

- `key`: The key to filter objects by.
- `value`: The value to filter objects against.

**Returns**

- An array of objects that match the specified key-value pair.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const engineers = people.where("occupation", "Engineer");
// Output: [{ name: "Alice", age: 28, occupation: "Engineer" }]

const teacher = people.where("occupation", "Teacher").where("age", 30);
// Output: [{ name: "Charlie", age: 30, occupation: "Teacher" }]
```

## <a name="whereIn"></a> `whereIn(key, values)`

**Description**

Filters the array where a key's value is in an array of values.

**Parameters**

- `key`: The key to filter by.
- `values`: An array of values to match against the key.

**Returns**

- An array containing objects where the specified key's value matches any of the provided values.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const filtered = people.whereIn("age", [25, 28]);
// Output: [{ name: "Alice", age: 28, occupation: "Engineer" },{ name: "Bob", age: 25, occupation: "Designer" }]
```

## <a name="select"></a> `select(key)`

**Description**

Creates a new array with objects containing only the specified key.

**Parameters**

- `...keys`: One or more keys to select from each object.

**Returns**

- An array of objects with only the specified key and its corresponding values.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const names = people.select("name");
// Output: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]

const namesAndAges = people.select("name", "age");
// Output: [{ name: "Alice", age: 28 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }]
```

## <a name="pluck"></a> `pluck(...keys)`

**Description**

Returns arrays of values for specified keys from each object in the array.

**Parameters**

- `...keys`: One or more keys to pluck values from each object.

**Returns**

- An array of arrays containing values corresponding to the specified keys from each object.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const pluckedValues = people.pluck("name", "age");
// Output: [["Alice", "Bob", "Charlie"], [28, 25, 30]]
```

## <a name="orderBy"></a> orderBy(key, order='asc')

**Description**

Sorts the array of objects based on a specified key and order.

**Parameters**

- `key`: The key to sort by.
- `order` (optional): Sorting order, either `'asc'` (default) or `'desc'`.

**Returns**

- The sorted array of objects.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const sortedByNameAsc = people.orderBy("name");
// Output: [{ name: "Alice", age: 28, occupation: "Engineer" }, { name: "Bob", age: 25, occupation: "Designer" }, { name: "Charlie", age: 30, occupation: "Teacher" }]

const sortedByAgeDesc = people.orderBy("age", "desc");
// Output: [{ name: "Charlie", age: 30, occupation: "Teacher" }, { name: "Alice", age: 28, occupation: "Engineer" }, { name: "Bob", age: 25, occupation: "Designer" }]
```

## <a name="first"></a> `first()`

**Description**

Retrieves the first element of the array.

**Parameters**

- None

**Returns**

- The first element of the array, or `undefined` if the array is empty.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const firstPerson = people.first();
// Output: { name: "Alice", age: 28, occupation: "Engineer" }
```

## <a name="last"></a> `last()`

**Description**

Retrieves the last element of the array.

**Parameters**

- None

**Returns**

- The last element of the array, or `undefined` if the array is empty.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const lastPerson = people.last();
// Output: { name: "Charlie", age: 30, occupation: "Teacher" }
```

## <a name="min"></a> `min(key)`

**Description**

Finds the minimum value of a specified numeric property across all objects in the array.

**Parameters**

- `key`: The key representing the numeric property to find the minimum value for.

**Returns**

- The minimum value of the specified numeric property, or `undefined` if the array is empty or if the property values are not numeric.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

const minAge = people.min("age");
// Output: 25
```

## <a name="max"></a> `max(key)`

**Description**

Finds the maximum value of a specified numeric property across all objects in the array.

**Parameters**

- `key`: The key representing the numeric property to find the maximum value for.

**Returns**

- The maximum value of the specified numeric property, or `undefined` if the array is empty or if the property values are not numeric.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

const maxAge = people.max("age");
// Output: 30
```

## <a name="take"></a> `take(count)`

**Description**

Retrieves a specified number of elements from the beginning of the array.

**Parameters**

- `count`: The number of elements to retrieve from the beginning of the array.

**Returns**

- An array containing the specified number of elements from the beginning of the original array.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
];

const firstTwoPeople = people.take(2);
// Output: [{ name: "Alice", age: 28, occupation: "Engineer" }, { name: "Bob", age: 25, occupation: "Designer" }]
```

## <a name="sum"></a> `sum(key)`

**Description**

Calculates the sum of a specified numeric property across all objects in the array.

**Parameters**

- `key`: The key representing the numeric property to calculate the sum for.

**Returns**

- The sum of the specified numeric property, or `0` if the array is empty or if the property values are not numeric.

**Example**

```javascript
const expenses = [
  { item: "Rent", amount: 1000 },
  { item: "Groceries", amount: 300 },
  { item: "Utilities", amount: 200 },
];

const totalExpenses = expenses.sum("amount");
// Output: 1500
```

## <a name="average"></a> `average(key)`

**Description**

Calculates the average value of a specified numeric property across all objects in the array.

**Parameters**

- `key`: The key representing the numeric property to calculate the average for.

**Returns**

- The average value of the specified numeric property, or `undefined` if the array is empty or if the property values are not numeric.

**Example**

```javascript
const scores = [
  { student: "Alice", score: 85 },
  { student: "Bob", score: 90 },
  { student: "Charlie", score: 75 },
];

const averageScore = scores.average("score");
// Output: 83.33
```

## <a name="groupBy"></a> `groupBy(key)`

**Description**

Groups elements of the array based on a specified key.

**Parameters**

- `key`: The key by which to group the elements.

**Returns**

- An object where keys are unique values of the specified key, and values are arrays of objects that share the same key value.

**Example**

```javascript
const people = [
  { name: "Alice", age: 28, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 30, occupation: "Teacher" },
  { name: "David", age: 28, occupation: "Developer" },
];

const groupedByAge = people.groupBy("age");
// Output:
// {
//   '25': [{ name: "Bob", age: 25, occupation: "Designer" }],
//   '28': [
//     { name: "Alice", age: 28, occupation: "Engineer" },
//     { name: "David", age: 28, occupation: "Developer" }
//   ],
//   '30': [{ name: "Charlie", age: 30, occupation: "Teacher" }]
// }
```

## <a name="unique"></a> `unique(key)`

**Description**

Returns an array of unique objects based on a specified key.

**Parameters**

- `key`: The key representing the property to determine uniqueness.

**Returns**

- An array containing unique objects based on the specified key.

**Example**

```javascript
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" },
  { id: 1, name: "Apple" },
  { id: 3, name: "Banana" },
];

const uniqueItems = items.unique("id");
// Output: [{ id: 1, name: "Apple" }, { id: 2, name: "Orange" }, { id: 3, name: "Banana" }]
```

## <a name="distinct"></a> `distinct(key)`

**Description**

Returns an array of distinct values of a specified property across all objects in the array.

**Parameters**

- `key`: The key representing the property to retrieve distinct values for.

**Returns**

- An array containing distinct values of the specified property.

**Example**

```javascript
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" },
  { id: 1, name: "Apple" },
  { id: 3, name: "Banana" },
];

const distinctIds = items.distinct("id");
// Output: [1, 2, 3]
```

# License

array-of-object-query is created by [Fahim Muntasir](https://github.com/fahim27) . Released under the MIT license.
