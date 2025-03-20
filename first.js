//Lect - 1

//VARIABLES
/*
fullname = "Vaishnavi Patekar";
age=20
x=null;
y=undefined;
isFollow=true;      //boolean
fullname=25;        //dynamically typed
console.log(fullname);
FULLNAME="vina"
console.log(FULLNAME); //case sensitive

//there should be no space between variable names
//only letters ,digits,_,and $is allowed
//only letter,_or$should be 1st character
//Reserved words cannot be variable name

//var,let,const are the keywords used to define variables generally let is used
//let : we cannot re-declare but can update variable .A block scope variable

//**DATA TYPES IN JS** = Number,String,Boolean,Undefined,Null,Bigint,Symbol

let price = 20309.908;
console.log(price);

//OBJECT - collection of diff variables  . has key value pairs

const student={
    fullname:"vaishnavi",   //here fullname is key and Vaishnavi is value   can write ab obj.key or obj["key"]
    age:20,
    cgpa:8.26,
    isPass:true,
};
student["age"]=student["age"]+1;

console.log(student);
*/
// const product = {
//     title : "ball pen",
//     rating:4.5,
//     offer:5,
//     price : 270,
// };

// console.log(product);

// const Profile ={
//     name : "Vaishnavi",
//     ifFollow : true,
//     isMessage : true,
//     posts : 195,
//     followers : 568,
//     following : 4,
// };

// console.log(Profile);

// console.log(typeof Profile["name"]);

//###############  Lect - 2   ##################

//OPERATORS AND CONDITIONAL STATEMENTS
//Arithmetic op: +,-,*,/

// let a=10;
// let b=5;
// console.log("a=",a,"b=",b);
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("a**b =",a**b);

// a++ = a+1  and a-- = a-1     **unary operators**
//a=a+1; //6
// a++;
// console.log(a); 
// b--;
// console.log(b);

//a++(post inc)  ++a(pre inc)
//a--(post dec)  --a(pre dec)

// console.log("a++ =",a++);//10
// console.log("a=",a);//11

// console.log("--a =",--a);//10
// console.log("a=",a);//10

//**ASSIGNMENT OP: = , += ,-= , *= , %= , **=
// let a=5;
// let b=2;

// a+=4;   //a=a+4
// console.log("a=",a);  //9

// a-=4;   //a=a-4
// console.log("a=",a);  // 9-4=5

//**COMPARISION OPERATORS : Eqaul to ==  ,not equal to !=  ,equal to & type === ,not equal to & type !==
//>,>=,<,<=

// let a=5;
// let b=2;

// console.log("5==2",a==b); //false
// console.log("5==5",a==a); //true

// let a=5;
// let b="5";

// console.log("a==b",a==b); //true
// console.log("a===b",a===b); //false
// console.log("a!==b",a!==b);  //true
// console.log("a<=b",a<=b);

//**LOGICAL OP : AND && , OR || , NOT ! 
//AND : BOTH SHOULD BE TRUE
//OR : EITHER ONE TRUE
//NOT : tue then false   if false then true

// let a=6;
// let b=5;

// let cond1= a>b; //true
// let cond2= a===6; //true5
// console.log("cond1 && cond2",cond1 && cond2); //true
// console.log("cond1 || cond2",a>b || a==5);  //true
// console.log("cond1 ! cond2",!a>b);


//**CONDITIONAL STATEMENT
//IF STATEMENT

// let age=25;

// if (age>18){
//     console.log("you can vote");
// }

// if (age<18){
//     console.log("you can not vote");
// }

// let mode="dark";
// let color;

// if(mode==="dark"){
//     color="black";
// }

// if(mode==="light"){
//     color="white";
// }

// console.log(color)


//if else

// if(mode==="dark"){
//     color="black";
// } else{
//     color="white";
// }

// console.log(color)

// let age = 25;
// if (age>18){
//          console.log("you can vote");
//      }else {
//         console.log("you can not vote");}
    
//  let num=10;
//  if(num%2===0){
//     console.log("even")
//  } else{
//     console.log("odd")
//  }

//else-if statement  : for multiple condition

// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }else if (mode ==="blue"){
//     color="blue";
// }else if(mode === "pink"){
//     color="pink"
// }else{
//     color="white"
// }

// console.log(color)

// if(mode==="dark"){
//     console.log(mode);
// }

//TERNARY OP : condition?true output:false output (a?b:c)

// let age = 25;
// let result=age>=18?"adult":"not adult";  //compact if else
// console.log(result)

//MDN Docs

//** alert  : one time popup

// alert("hello!");

//** prompt   :popup msg along with input

// let name=prompt("hello");
// console.log(name);

//PRACTICE QUES

//ques 1
// let num=prompt("Enter a number")
// console.log(num);

// if (num%5===0){
//     console.log("multiple of 5")
// }else{
//     console.log("not multiple of 5")
// }

//ques 2
// let score=prompt("Enter score (0-100):")
// console.log(score);

// if(score >=80 && score<=100){
//     console.log("A")
// }else if(score >=70 && score<=89){
//     console.log("B")
// }else if(score >=60 && score<=60){
//     console.log("C")
// }else if(score >=50 && score<=59){
//     console.log("D")
// }else if(score =0 && score<=49){
//     console.log("E")
// }

//##############    lect 3      ###########

//LOOPS AND STRINGS

//for loop : for(let i=1;i<=5;i++)
// for(let i=1;i<=5;i++){
//     console.log("vina");
// }

// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }

// console.log("sum=",sum);
// console.log("loop ended");

// for(let i=1;i<=5;i++){
//     console.log("i=",i);
// }

//INFINITE LOOP  stopping condition always true ##do not try it

//while loop
// let i=1;
// while(i<=10){
//     console.log("Vina");
//     i++;
// }

//do while loop
// let i =20;
// do{
//     console.log("vina");
//     i++;
// }while(i<=10);

//for-of loop : helps on strings and array variable
// let str="Vaishnavi";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++
// }
// console.log("string size =",size);

//for-in loop
// let student={
//     name:"vina",
//     age:20,
//     cgpa:8.95,
//     isPass:true
// };

// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//PRACTICE QUES
//ques 1 print even no from 0 -100

// for(let i=0;i<=100;i++){
//     if(i%2===0)
//     {
//         console.log("i=",i);
//     }
    
// }

//ques 2 game num guess

// let gamenum=25 ;
// let num=prompt("Enter a gamenum")
 

//  while(num!=gamenum){
//      num=prompt("You entered wrong number.Guess again:")
//  }
 

//      console.log(prompt("congrats you entered right number"))


//** STRINGS

 //let str="vaishnavi";  // let str2='vina';
//string length  str.length;

//string indices  str[0],str[1]

// console.log(str[2]); //i

//**TEMPLATE LITERALS  : a way to have embedded expression in strings created using backtick
// let specialString= `This is a template literal`;
// console.log(specialString);

// let obj={
//     item:"pen",
//     price:10,
// };

//console.log("The cost of",obj.item ,"is",obj.price,"rupees");

// let output=`the cost of${obj.item} is ${obj.price} rupees`;
// console.log(output);

//ESCAPE CHARC  \n - USE TO PRINT STRING ON NEXT LINE
//              \t - for tab space  

// console.log("vaishnavi \n patekar");
// console.log("vaishnavi \t patekar");

// let str ="vaishnavi\tpatekar"; // 17  \t and \n is counted as single charc
// console.log(str.length);


//STRING METHOD 
//built in functions 
//str.toUpperCase()
//str.toLowerCase()
//str.trim() : removes whitespaces from start and end
//@@@@  strings are immutable @@@

//str.slice(start,end?) : returns part of string
//str1.concat(str2) : joins str2 with str1
//str.replace(searchVal,newVal)
//str.charAt(idx)


// let str="My name is vaishnavi";
// newStr=str.toUpperCase();  //these functions do not change the original string but creates a new string
// console.log(str);
// console.log(newStr);
// newStr2=str.toLowerCase();  
// console.log(newStr2);

// let str2="    vaishnavi patekar   ";
// newStr3=str2.trim();
// console.log(newStr3);  

// let str="12345678";
// console.log(str.slice(1,4));
// console.log(str.slice(1));

// let str1="vina";
// let str2="hello";
// console.log(str1.concat(str2));
// console.log(str2.concat(str1));
//  let result = str1.concat(str2);
//  console.log(result);

// let result=str1+str2;
//let result=str1+1245;
// console.log(result);

// let str="hello";
// console.log(str.replace("h","y"));
// console.log(str.replace("lo","p"));
// console.log(str.replace("l","y"));
// console.log(str.replaceAll("l","y"));

// let str="I love JS";
// console.log(str.charAt(3));//o

//Practice ques
//ques 1 username

//method 1-
// let name=prompt("Enter username");
// console.log(name);

// let username;
// console.log(`@${name}${name.length}`);

//method 2-
// let fullname=prompt("enter your fullname without spaces");
// let username="@"+fullname+fullname.length;
// console.log(username);


//################  lect - 4  #######################

//        ARRAYS    
//arrays are mutable i.e it can be changed

// let marks=[90,87,76,57,98];
// console.log(marks);
// console.log(marks.length);

//  let names=['vina','siya','vaishnavi','priya','neha'];
//  console.log(names);

//looping over arrays

// let names=['vina','siya','vaishnavi','priya','neha'];
// console.log(names);

// for(let i=0;i<names.length ; i++){
//   console.log(names[i]);
// }

//for-of
// for(let name of names ){
//     console.log(name)
// }
// for(let name of names ){
//     console.log(name.toUpperCase())
// }

//Practice ques- 
//ques 1 - given arr avg of amrks
// let marks=[85,97,44,37,76,60]

// let sum=0;
//  for(let val of marks){
//      sum+=val;
//  }
// console.log(sum); 
// let avg=sum/marks.length;
// console.log("avg=",avg);

//ques 2 - given arr after 10%offer on each item
//method 1-
// let item=[250,645,300,900,50]
// let idx=0;
// for(let val of item){
//     //console.log(`value at index ${idx}=${val}`);
//     let offer=val/10;
//     item[idx]=item[idx]-offer;
//    // console.log(`value after offer=${val}`)
//    console.log(`value after offer=${item[idx]}`)

//     idx++;
    
// }

// console.log(item);

//method 2-
// let item=[250,645,300,900,50];
// for(let i=0;i<item.length;i++){
//     let offer=item[i]/10;
//     item[i]-=offer;
// }
// console.log(item);

//ARRAY METHODS
//Push():add to end  - change in original array
//Pop():delete from end & return - change in original array
//toString():converts array to string - do not change original string makes new string
//Concat():Joins multiple arrays & returns result - do not change original array makes new array
//unshift():add to start 
//shift:delete from start & return - change in original array
//Slice():returns a piece of the array   - slice(startIdx,endIdx)
//Splice():change original array(add,remove,replace)  - splice(startIdx,delCount,newEl1...)


//let fruits=["apple","banana","litchi","guava","grapes"];
// fruits.push("berry","lemon","melon");
//console.log(fruits);

// let deletedFruit=fruits.pop();
// console.log(fruits);
// console.log("deleted",deletedFruit);

// console.log(fruits.toString());
// console.log(fruits);

//let marvelheroes=["thor","spiderman","ironman","hulk"];
//let dcheroes=["superman","batman"];
// let heroes=marvelheroes.concat(dcheroes);
// console.log(heroes);
// marvelheroes.unshift("antman");
// console.log(marvelheroes);

// let val=marvelheroes.shift();
// console.log("deleted",val);

// let marvelheroes=["thor","spiderman","ironman","hulk","black widow"];
// console.log(marvelheroes);

// console.log(marvelheroes.slice(1,4));
// console.log(marvelheroes.slice(1));

//let arr=[1,2,3,4,5,6,7];
//console.log(arr);
//arr.splice(2,2,101,102);

//ADD element
//arr.splice(2,0,102);

//DELETE element
//arr.splice(3,1);

//REPLACE element
//arr.splice(3,1,101);

//If we pass a index in slice method in inspect window we get the elements afetr the pass index
//and them when we print the arr again we get the elements before the index means the elements after the index get deleted

//PRACTICE Ques
//ques 1 - company names remove and replace, add

//let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//companies.shift();
//companies.splice(2,1,"Ola");
//companies.push("Amazon");
//console.log(companies);


//####################  lect 5   ######################

//FUNCTIONS IN JS
//Block of code that performs a specific task,can be invoked whenever needed

//Function definition - 
//functio functionName(){
// //do some work
//}

//Function call-
//functionName();

// function myFunction(){
//     console.log("welcome to js tutorial");
//     console.log("my name is vina");
// }

// myFunction();

// function myFunction(msg){
//     //parameter -> input
//     console.log(msg);
// }

// myFunction("Vaishnavi"); //argument

//we can pass multiple parametes as well

// function myFunction(msg , n){
//          //parameter -> input
//          console.log(msg , n);
//      }
    
//      myFunction("Vaishnavi","vina"); //argument

//NAN - not a number

// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,3);

// function sum(a,b){
//     s=a+b;
//     return s;
//     //code written after return statement will never be printed
// }

// let val=sum(3,4);
// console.log(val);

// ** Function parameters are like local variables of function they have block scope can't be defined outside of block

//ARROW FUNCTION  =>
//const functionName=(para1,para2)=>{
//do some work
// }

// function sum(a,b){
//     return a+b;
// }

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };

//  const arrowMult=(x,y)=>{
//      console.log(x*y);
//      console.log(x+y);
//      console.log(x-y);
//      console.log(x/y);

//  }

//PRACTICE QUES
//ques 1 - count vowels

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a" || 
//             char==="e" ||
//             char==="i" || 
//             char==="o" || 
//             char==="u"){
//                 count++
//             }
//         }
//   return count;
// }

//ques 2 - count vowels using arrow function

// const countVow=str=>{

//     let count=0;
//     for(const char of str){
//         if(char==="a" || 
//             char==="e" ||
//             char==="i" || 
//             char==="o" || 
//             char==="u"){
//                 count++
//             }
//         }
//   return count;
// }


//forEach loop in ARRAYS - **Higher order functions or methods they either take another function as a  parameters inside them or returns functin as a value
//arr.forEach(callBackFunction)
//CallbackFunction:Here,it is a function to execute for element in array

// let arr=[1,2,3,4,5,6,7,8];
// arr.forEach(function printVal(val){//value at each index
//      console.log(val);

// });

// let arr=[1,2,3,4,5,6,7,8];
// arr.forEach((val)=>{//value at each index
//      console.log(val);

// });

// let arr=["pune","delhi","mumbai"];
// arr.forEach((val)=>{
//      console.log(val.toUpperCase());

// });

// let arr=["pune","delhi","mumbai"];
// arr.forEach((val,idx,arr)=>{
//      console.log(val.toUpperCase(),idx,arr);

// });

//PRACTICE QUESTION
//ques 1-

// let arr=[1,2,3,4,5,6];
// arr.forEach((arr)=>{
//     console.log(arr*arr)
// });

// let nums=[92,98,12];
// let calcSquare=(nums)=>{
//     console.log(nums*nums);
// };

// nums.forEach(calcSquare);

//SOME MORE ARRAY METHOD

// 1. MAP - creates a new array with the results of some operation.the value its callback returns are used to form new array
//arr.map(callbackFnx(value,index,array))

// let num=[1,2,3,4,5];
// num.map((val)=>{
//     console.log(val);
// });

// let num=[1,2,3,4,5];
// let newArr=num.map((val)=>{
//     return val;
// });

// console.log(newArr);


// let num=[1,2,3,4,5];
// let newArr=num.map((val)=>{
//     return val*2;
// });

// console.log(newArr);

// 2. Filter - creates a new array of elements that give true for a condition/filter. eg.all even elements

// let arr=[1,2,3,4,5,6,7,8];
// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr);

// 3.Reduce - Performs some operations & reduces the array to a single value.It returns that single value.

// let arr=[1,2,3,4,];
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// let arr=[1,2,3,4,];
// const output=arr.reduce((prev,curr)=>{
//     return prev>curr ? prev : curr;
// });
// console.log(output);

//PRACTICE QUESTION
//ques 1 - filter out 90+ marks

// let marks=[87,67,99,98,93,45];
// let newMarks=marks.filter((val)=>{
//     return val>90;
// });
// console.log(newMarks);

//ques 2 - take num n input from user create arr from 1 to n. use reduce met to cal sum all num in arr and product.

// let n=prompt("Enter a number n");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i; 
// }
// console.log(arr);

// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// });

// console.log("sum=",sum);

// let prod=arr.reduce((res,curr)=>{   //here prod can be factorial
//     return res*curr;
// });

// console.log("product=",prod);









