function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined
  }
  if (Array.isArray(x) && x.length === 0) {
    return 0; // Handle empty array
  }
  if (!Array.isArray(x)) {
    return NaN; //Handle non-array input
  }
    // ... rest of the function
}