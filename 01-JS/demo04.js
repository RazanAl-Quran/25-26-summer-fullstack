// Resources
// https://developer.okta.com/blog/2019/01/16/history-and-future-of-async-javascript
// https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
// http://callbackhell.com/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ


// callbacks
// function calculateSquare(number, displayResult) {
//     console.log('inside calculateSquare');
//     let result = number * number;
//     displayResult(result);
// }

// function displayResult(result) {
//     console.log("The square is:", result);
// }
// // Calling the function with a callback
// calculateSquare(5, displayResult);


// console.log('hi 1');
// function cb() {
//     console.log('hi 2');
// }
// setTimeout(cb, 3000);
// console.log('hi 3');


// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 done");
//         callback();
//     }, 4000);
// }

// function step2() {
//      setTimeout(() => {
//         console.log("Step 2 done");
//     }, 3000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 done");
//         callback();
//     }, 4000);
// }

// step3(() => {
//     step1(() => {
//         step2();
//     });
// });


// step1(step2(step3()));


// console.log('hi1');

// Promises
// let result = fetch('https://digimon-api.vercel.app/api/digimon/level/rookie');
// console.log(result);


// fetch('https://digimon-api.vercel.app/api/digimon/level/rookie')
// .then((result)=>{
//     // console.log(result.json());  
//     return result.json();
// }).then((newResult)=>{
//     // console.log(newResult);
//     // Extract only the names into a new array
//     const names = newResult.map(digimon => digimon.name);
//     console.log(names);
    
//     // return names;
// }).catch(error=>{
//     console.log(error);
    
// })


// console.log('hi3');
// console.log('hi4');



console.log('hi1');

async function fetchDigimonNames() {
    try{
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();
        const names = data.map(digimon => digimon.name);
        console.log('Digimon Names:', names);

    } catch(error) {
        console.log(error);
        
    }
}
fetchDigimonNames();
console.log('hi3');
console.log('hi4');


