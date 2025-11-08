const arr = ["a", "b", "c", "d", "e"];

// push():
// Syntax: array.push(element1, element2, ..., elementN)
// 1. Adds element to the end of an array
// 2. Returns new length of the array. Modifies the original array
// 3. O(1) time complexity - constant time operation
// console.log("Before push:_", arr);
// console.log(arr.push('f'));      //  6
// console.log("After Push:_", arr);
// console.log("=============");

// pop():
// Syntax: array.pop()
// 1. Removes the last element from an array
// 2. Returns the removed element (undefined if array is empty). Modifies the original array
// 3. O(1) time complexity - constant time operation
// console.log("Before pop:_", arr);
// console.log(arr.pop());      //  'f'
// console.log("After Pop:_", arr);
// console.log("=============");

// shift():
// Syntax: array.shift()
// 1. Removes the first element from an array
// 2. Returns the removed element (undefined if array is empty). Modifies the original array
// 3. O(n) time complexity - all remaining elements need to be re-indexed
// console.log("Before shift:_", arr);
// console.log(arr.shift());        //  'a'
// console.log("After Shift:_", arr);
// console.log("=============");

// unshift():
// Syntax: array.unshift(element1, element2, ..., elementN)
// 1. Adds one or more elements to the beginning of an array
// 2. Returns the new length of the array. Modifies the original array
// 3. O(n) time complexity - all existing elements need to be re-indexed
// console.log("Before unshift:_", arr);
// console.log(arr.unshift('e'));      //  6
// console.log("After Unshift:_", arr);
// console.log("=============");

// splice():
// Syntax: array.splice(start, deleteCount, item1, item2, ..., itemN)
// 1. Adds/removes elements from any position using index
// 2. Returns an array containing the deleted elements ([] if none removed). Modifies the original array
// 3. O(n) time complexity - elements after the splice point need to be re-indexed
// console.log("Before splice:_", arr);
// console.log(arr.splice(1, 4));    //  ['b', 'c', 'd', 'e']
// console.log(arr.splice(2, 4,'abc'));          //  ['e'].  => After splice: _ [ 'a', 'abc' ]
// console.log("After splice:_", arr);
// console.log("=============");

// slice():
// Syntax: array.slice(start, end)
// 1. Extracts a section of an array and returns it as a new array
// 2. Returns a new array containing the extracted elements. Does NOT modify the original array
// 3. O(n) time complexity - where n is the number of elements to copy
// console.log("Before slice:_", arr);
// console.log(arr.slice(1, 4));    //  ['b', 'a', 'b']
// console.log("After slice:_", arr);
// console.log("=============");

// indexOf():
// Syntax: array.indexOf(searchElement, fromIndex)
// 1. Searches for the first occurrence of a specified element in an array
// 2. Returns the first index of the element, or -1 if not found. Does NOT modify the original array
// 3. O(n) time complexity - linear search through the array
// console.log("Before indexOf:_", arr);
// console.log(arr.indexOf('a'));    //  2
// console.log("After indexOf:_", arr);
// console.log("=============");

// lastIndexOf():
// Syntax: array.lastIndexOf(searchElement, fromIndex)
// 1. Searches for the last occurrence of a specified element in an array
// 2. Returns the last index of the element, or -1 if not found. Does NOT modify the original array
// 3. O(n) time complexity - linear search through the array (from end to start)
// console.log("Before lastIndexOf:_", arr);
// console.log(arr.lastIndexOf('b'));    //  3
// console.log("After lastIndexOf:_", arr);
// console.log("=============");

// length:
// Syntax: array.length or array.length = newLength
// 1. Property that gets/sets the number of elements in an array
// 2. Returns the number of elements. Can be used to truncate or extend array (modifies original)
// 3. O(1) time complexity - direct property access
// console.log("Before length:_", arr);
// console.log(arr.length);    //  5
// console.log("After length:_", arr);
// console.log("=============");

// forEach():
// Syntax: array.forEach(callback(element, index, array), thisArg)
// 1. Executes a provided function once for each array element
// 2. Returns undefined. Does NOT modify the original array (unless callback does)
// 3. O(n) time complexity - visits each element once
// console.log("Before forEach:_", arr);
// arr.forEach((element) => console.log(element.toUpperCase()));
// console.log("After forEach:_", arr);
// console.log("=============");

// map():
// Syntax: array.map(callback(element, index, array), thisArg)
// 1. Creates a new array with results of calling a function on every element
// 2. Returns a new array of same length with transformed elements. Does NOT modify the original array
// 3. O(n) time complexity - visits each element once
// console.log("Before map:_", arr);
// console.log(arr.map((element) => element.toUpperCase()));
// console.log("After map:_", arr);
// console.log("=============");

// filter():
// Syntax: array.filter(callback(element, index, array), thisArg)
// 1. Creates a new array with all elements that pass a test function
// 2. Returns a new array (can be shorter than original). Does NOT modify the original array
// 3. O(n) time complexity - visits each element once
// console.log("Before filter:_", arr);
// console.log(arr.filter((element) => element > 'b'));
// console.log("After filter:_", arr);
// console.log("=============");

// reduce():
// Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// 1. Executes a reducer function on each element, resulting in a single output value
// 2. Returns a single accumulated value. Does NOT modify the original array
// 3. O(n) time complexity - visits each element once
// console.log("Before reduce:_", arr);
// console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, ''));
// console.log("After reduce:_", arr);
// console.log("=============");

// find():
// Syntax: array.find(callback(element, index, array), thisArg)
// 1. Returns the first element that satisfies the provided testing function
// 2. Returns the first matching element or undefined if none found. Does NOT modify the original array
// 3. O(n) time complexity - may need to visit up to n elements (stops at first match)
// console.log("Before find:_", arr);
// console.log(arr.find((element) => element > 'b'));
// console.log("After find:_", arr);
// console.log("=============");

// findIndex():
// Syntax: array.findIndex(callback(element, index, array), thisArg)
// 1. Returns the index of the first element that satisfies the testing function
// 2. Returns the first matching index or -1 if none found. Does NOT modify the original array
// 3. O(n) time complexity - may need to visit up to n elements (stops at first match)
// console.log("Before findIndex:_", arr);
// console.log(arr.findIndex((element) => element > 'b'));
// console.log("After findIndex:_", arr);
// console.log("=============");

// includes():
// Syntax: array.includes(searchElement, fromIndex)
// 1. Determines whether an array contains a certain value among its entries
// 2. Returns a boolean (true or false). Does NOT modify the original array
// 3. O(n) time complexity - linear search through the array
// console.log("Before includes:_", arr);
// console.log(arr.includes('c'));
// console.log("After includes:_", arr);
// console.log("=============");

// concat():
// Syntax: array.concat(value1, value2, ..., valueN)
// 1. Merges two or more arrays into a new array
// 2. Returns a new array with combined elements. Does NOT modify the original array
// 3. O(n + m) time complexity - where n and m are lengths of arrays being concatenated
// console.log("Before concat:_", arr);
// console.log(arr.concat(['f', 'g', 'h']));
// console.log("After concat:_", arr);
// console.log("=============");

// join():
// Syntax: array.join(separator)
// 1. Creates and returns a string by concatenating all elements separated by a delimiter
// 2. Returns a string representation of the array. Does NOT modify the original array
// 3. O(n) time complexity - visits each element once to create the string
// console.log("Before join:_", arr);
// console.log(arr.join('-'));
// console.log("After join:_", arr);
// console.log("=============");

// reverse():
// Syntax: array.reverse()
// 1. Reverses the order of elements in an array in place
// 2. Returns the same array with elements reversed. Modifies the original array
// 3. O(n) time complexity - swaps elements from both ends toward the center
// console.log("Before reverse:_", arr);
// console.log(arr.reverse());
// console.log("After reverse:_", arr);
// console.log("=============");

// sort():
// Syntax: array.sort(compareFunction)
// 1. Sorts elements of an array in place using string Unicode code points (or custom compare function)
// 2. Returns the same array with elements sorted. Modifies the original array
// 3. O(n log n) time complexity - uses efficient sorting algorithm (typically QuickSort or MergeSort)
// console.log("Before sort:_", arr);
// console.log(arr.sort());
// console.log("After sort:_", arr);
// console.log("=============");

// fill():
// Syntax: array.fill(value, start, end)
// 1. Changes all elements in an array to a static value from start to end index
// 2. Returns the modified array itself. Modifies the original array
// 3. O(n) time complexity - where n is the number of elements to fill
// console.log("Before fill:_", arr);
// console.log(arr.fill('x', 1, 4));
// console.log("After fill:_", arr);
// console.log("=============");

// flat():
// Syntax: array.flat(depth)
// 1. Creates a new array with all sub-array elements concatenated recursively up to specified depth
// 2. Returns a new flattened array. Does NOT modify the original array
// 3. O(n) time complexity - where n is the total number of elements including nested ones
// console.log("Before flat:_", [1, 2, [3, 4, [5, 6]]]);
// console.log([1, 2, [3, 4, [5, 6]]].flat(3));
// console.log("After flat:_", [1, 2, [3, 4, [5, 6]]]);
// console.log("=============");

// flatMap():
// Syntax: array.flatMap(callback(element, index, array), thisArg)
// 1. Maps each element using a function, then flattens the result into a new array (equivalent to map + flat)
// 2. Returns a new array with mapped and flattened results. Does NOT modify the original array
// 3. O(n) time complexity - maps each element once then flattens by one level
// console.log("Before flatMap:_", [1, 2, 3]);
// console.log([1, 2, 3].flatMap(x => [x, x * 2]));
// console.log("After flatMap:_", [1, 2, 3]);
// console.log("=============");

// some():
// Syntax: array.some(callback(element, index, array), thisArg)
// 1. Tests whether at least one element in the array passes the test function
// 2. Returns a boolean (true if at least one element passes, false otherwise). Does NOT modify the original array
// 3. O(n) time complexity - may need to visit up to n elements (stops at first match)
// console.log("Before some:_", arr);
// console.log(arr.some((element) => element === 'a'));
// console.log("After some:_", arr);
// console.log("=============");

// every():
// Syntax: array.every(callback(element, index, array), thisArg)
// 1. Tests whether all elements in the array pass the test function
// 2. Returns a boolean (true if all elements pass, false otherwise). Does NOT modify the original array
// 3. O(n) time complexity - may need to visit up to n elements (stops at first failure)
// console.log("Before every:_", arr);
// console.log(arr.every((element) => typeof element === 'string'));
// console.log("After every:_", arr);
// console.log("=============");

// toString():
// Syntax: array.toString()
// 1. Returns a string representing the array and its elements (comma-separated)
// 2. Returns a string representation. Does NOT modify the original array
// 3. O(n) time complexity - visits each element once to create the string 
// console.log("Before toString:_", arr);
// console.log(arr.toString());
// console.log("After toString:_", arr);
// console.log("=============");

// toLocaleString():
// Syntax: array.toLocaleString(locales, options)
// 1. Returns a string representing the elements using their toLocaleString methods
// 2. Returns a localized string representation. Does NOT modify the original array
// 3. O(n) time complexity - visits each element once to create the localized string
// console.log("Before toLocaleString:_", arr);
// console.log(arr.toLocaleString());
// console.log("After toLocaleString:_", arr);
// console.log("=============");

// entries():
// Syntax: array.entries()
// 1. Returns a new array iterator object with key/value pairs for each index
// 2. Returns an iterator object. Does NOT modify the original array
// 3. O(1) time complexity - creates iterator, actual iteration is O(n)
// console.log("Before entries:_", arr);
// console.log(arr.entries());
// console.log("After entries:_", arr);
// console.log("=============");

// keys():
// Syntax: array.keys()
// 1. Returns a new array iterator that contains the keys (indexes) for each index
// 2. Returns an iterator object. Does NOT modify the original array
// 3. O(1) time complexity - creates iterator, actual iteration is O(n)
// console.log("Before keys:_", arr);
// console.log(arr.keys());
// console.log("After keys:_", arr);
// console.log("=============");

// values():
// Syntax: array.values()
// 1. Returns a new array iterator object that contains the values for each index
// 2. Returns an iterator object. Does NOT modify the original array
// 3. O(1) time complexity - creates iterator, actual iteration is O(n)
// console.log("Before values:_", arr);
// console.log(arr.values());
// console.log("After values:_", arr);
// console.log("=============");

// Array.isArray():
// Syntax: Array.isArray(value)
// 1. Determines whether the passed value is an array
// 2. Returns a boolean (true if value is an array, false otherwise). Static method
// 3. O(1) time complexity - direct type checking
// console.log("Before Array.isArray:_", arr);
// console.log(Array.isArray(arr));
// console.log("After Array.isArray:_", arr);
// console.log("=============");
