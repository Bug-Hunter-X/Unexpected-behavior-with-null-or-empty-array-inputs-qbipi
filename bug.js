function foo(x) {
  if (x == null) {
    return 0; // Handle null
  }
  if (x.length === 0) {
    return 0; // Handle empty array
  }
  // ... rest of the function
}