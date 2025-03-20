function getName(name){
    return name;
}


let a = false;
let b = false;

// console.log(a && getName("Vaishnavi Patekar"));

console.log(a || getName("Vaishnavi Patekar"));

//Template Literals

let name1 = "Vina";
let name2 = "Patekar";

console.log(name1 + " " + name2,`${name1} ${name2}`);


//Ternary Operator

const showRecipeOne = false;

function getRecipeOneName(recipeName){
    return recipeName;
}

function getRecipeTwoName(recipeName){
    return recipeName;
}

if(showRecipeOne){
    console.log(getRecipeOneName("Pizza"));
}else{
    console.log(getRecipeTwoName("Coke"));
}

//condition ? statement1 : statement2

showRecipeOne ? console.log(getRecipeOneName("Pizza")) :  console.log(getRecipeTwoName("Coke"));

//Short hand property

const id = 1;
const productName = "Apple";
const rating = 5;

const product = {
    id,
    productName,
    rating,
};

console.log(product);

const product2 = {
    description : "Product2 description",
    id,
    productName,
    rating,
};

// const getProductTwoDescription = product2.description;
// console.log(getProductTwoDescription);

const{description} = product2;
console.log(description);

const array = [1,2,3];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
let getArrayThirdValue = array[2];

console.log(getArrayFirstValue,getArraySecondValue,getArrayThirdValue);

const [arrayFirstElement , arraySecondElement , arrayThirdElement] = array

console.log(arrayFirstElement,arraySecondElement , arrayThirdElement);


//default parameters, spread and  rest operators

function mulOfTwoNumbers(num1 = 1,num2 = 2){
    console.log(num1,num2);
    return num1*num2;
}

console.log(mulOfTwoNumbers);


const array2 = [2,3,4];
const array3 = [10,11,12];

console.log([...array2,...array3]);


