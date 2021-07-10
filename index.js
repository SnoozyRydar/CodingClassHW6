/* Q1 */

const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

console.log(ucFirst('peter'));

// Q2

const checkSpam = (str) => {
    const spam = ['sex', 'free', 'viagra', 'porn'];
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i ++) {
        const wordToCompare = arr[i];
        spam.forEach((word) =>{
            if (word === wordToCompare){
                return true;
            }
        });   
    }

};

console.log(checkSpam('buy Viagra now'));



// Q3


const truncate = (str, maxlength) => {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...';
    }
    return str;
};

console.log(truncate('Hello world', 20)); 


//Q4

const extractCurrencyValue = (str) => {
    return +(str.slice(1));
};

console.log(typeof extractCurrencyValue('$1000'));

const fruits = ['Apples', 'Oranges', 'Pear'];


const shoppingCart = fruits;
shoppingCart.push('Banana');


//Q5

const styles = ['Jazz', 'Blues'];
styles.push('Rock n Roll');
const index = Math.floor(styles.length / 2);
styles[index] = 'Classics';
console.log(index);

console.log(styles);



const camelize = (str) => {
    const arr = str.split('-');
    console.log(arr); 
    let result = arr[0]
    for (let i = 1; i < arr.length; i ++) {
        result = result + ucFirst(arr[i]);
    }
    return result;
};

console.log(camelize('background-color'));



const filterRange = (arr, a, b) => {
    const result = [];

    arr.forEach(value => {
        if (value >= 1 && value <=4) {
            result.push(value);
        }
    });
    return result;
};


const filterInPlace = (arr, a, b) => {
    for (let i = 0; i<arr.length; i++){
        if (arr[i] <a || arr[i] > b) {
            arr[i] = null
        }
    }
    console.log(arr);
    return arr.filter((v) => v !== null);
};

let john = { name: 'John', age: 75};
let pete = { name: 'Pete', age: 30};
let mary = { name: 'Mary', age: 28};
let users = [john, pete, mary];

const names = users.map((value) => {
    return value.name;
});

console.log(names); ['John', 'Pete', 'Mary'];