/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 */
// Asynchronous
function sendRequest(url, callback) {
    console.log('1. Sending request', url);
    // Promise
    fetch(url).then(function (response){
        callback(response)
    });
}

// Sync
function processResponse(response) {
    console.log('2. Processing response: ', response);
    return response.status;
}

// Synchronous
function validateResponse(statusCode) {
    console.log('3. Validating..');
    if(statusCode === 200){
        console.log("Passed!");
    } else {
        console.error("Failed, status code: ", statusCode);
    }
}


// Define Usage function
async function run(){
    const targetUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = await fetch(targetUrl);
    const jsonResults = await response.json();
    console.log(jsonResults);
};

// Run
run();


