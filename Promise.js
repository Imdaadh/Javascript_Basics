//Promise-based asynchronous function
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    const isSuccess = true; // Simpler example with success
    if (isSuccess) {
      resolve("Data fetched successfully");
      console.log(resolve)
    } else {
      reject("Error: Unable to fetch data");
    }
  });
}

// Using the Promise
fetchData()
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });