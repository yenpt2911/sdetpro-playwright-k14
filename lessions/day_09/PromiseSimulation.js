function asyncFunction01(param1){
    console.log('Processing: ', param1);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunction01: ' + param1;
            resolve(returnedValue);
    
        }, 1000);

    })
}

function asyncFunction02(param2){
    console.log('Processing: ', param2);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunction02: ' + param2;
            resolve(returnedValue);
        }, 1000);
    })
    
}

function asyncFunction03(param3){
    console.log('Processing: ', param3);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunction03: ' + param3;
            resolve(returnedValue);
        }, 1000);
    })
}

// Usage
asyncFunction01('param1')
    .then(function(returnedValue1){
        return asyncFunction02(returnedValue1)
    })
    .then(function(returnedValue2){
        return asyncFunction03(returnedValue2)
    })
    .then(function(returnedValue3){
        console.log(returnedValue3);
    })

/**
 * Asynchronous -> Vi du ve uong cafe
 * Asynchronous -> callback -> callback hell problem {nested callback}
 * Asynchronous -> Promise -> thenable
 * Asynchronous -> Promise -> async/await -> clean syntax + easy to maintain
 */