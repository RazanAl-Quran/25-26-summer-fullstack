// template literals
// 1- string interpolation

let x = 9;
let y = 7;

console.log('The sum of ' + x + 'and' + y + 'is' + (x + y));
console.log(`The sum of ${x} and ${y} is ${x + y}`);


// 2- multi line
let str = `dfghjsdfcgvsdsdfgxdcfgdfghf
ghdfghsdfghfghsdfg
erttyhjfghsdfghfg`;
console.log(str);


const s2 = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(s2);


// array iterations
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

let people = ['Razan', 'Sherry', 'Abdulrahman', 'Aisha'];

// Foreach
people.forEach(function (item, ss) {
    console.log(item);
    console.log(ss);
});


const peoplefunc = (item, ss) => {
    console.log(item);
    console.log(ss);
}

people.forEach(peoplefunc);



// Map
let numbers = [2, 3, 4, 5];
// let squares = numbers.map((num)=>{
// console.log(num);
//     return num*num;
// })
let squares = numbers.map(num => num * num);
console.log(numbers);
console.log(squares);

let people2 = [
    { name: "Atallah", role: "Dad" },
    { name: "Messina", role: "Mom" },
    { name: "Razan", role: "Kid" },
    { name: "Zaid", role: "Kid" },
];

let names = people2.map((person, idx) => {
    //   return person.name;

    if (person.name === 'Atallah') {
        return person.name;
    } 
})

console.log(names);

// filter
let numbers2= [1,2,6,7,8];
let evens = numbers2.filter((item)=>{
    if(item%2==0){
        return true;
    }
})

console.log(numbers2);
console.log(evens);








