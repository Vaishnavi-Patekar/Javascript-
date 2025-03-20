//#################### lect 11 ########################

//CLASSES AND OBJECTS

//Prototypes in JS
//A javascript object is an entity having state and behavior (prpoerties and method).
//JS objects have a special property called prototype.
//we can set prototype using__proto__
//** If object & prototype have same method,objects method will be used

// const student = {
//     fullName :"Vaishnavi Patekar",
//     marks:93,
//     printMarks : function(){
//         console.log("marks =",this.marks);
//     },
// };\

// const employee = {
//     calcTax1(){
//         console.log("tax rate is 10%");
//     },

    // calcTax2:function(){
    //     console.log("tax rate is 10%");
    // },
//};

//Above both ways of defining function used for calcTax1 and calcTax2 are correct but generally format used for calcTax1 is used.

// const vina1 = {
//     salary : 5000000,
//     calcTax1(){
//         console.log("tax rate is 20%");  //here object mehod will be used of calcTax1(it is same in protityoe and object)
//     },
// };

// const vina2 = {
//     salary : 5000000,
// };

// const vina3 = {
//     salary : 5000000,
// };

// const vina4 = {
//     salary : 5000000,
// };

//vina1.__proto__ = employee;
// vina2.__proto__ = employee;
// vina3.__proto__ = employee;
// vina4.__proto__ = employee;



//CLASSES in JS 

//Class is a program-code template for creating objects.
//those objects will have some state(variables)& some behavior(functions) inside it.
//SYNTAX - 
// class MyClass{
//     constructor(){...}
//     myMethod(){...}
// }

// let myObj = new MyClass; 

// class ToyotaCar{

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let fortuner = new ToyotaCar;
// fortuner.setBrand("fortuner");

//Constructor() method is :
//*automatically invoked by new
//*initializes object

// class ToyotaCar{

//     constructor(brand){
//         console.log("creating new object");
//         this.brandName = brand;
    
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotaCar("fortuner");


//INHERITANCE IN JS

//inheritance is passing down properties & methods from parent class to child class.

// class Parent{

// }

// class Child extends Parent{

// }

//*If Child & Parent have same method,child's method will be used.[Method Overriding]

// class Parent{
//    hello(){
//     console.log("hello");
//    }
// }

// class Child extends Parent{}

// let obj = new Child();


// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("code");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patient");
//     }
// }

// let vinaObj = new Engineer();

//Super Keyword
//the super keyword is used to call the constructor of its parent class to access the parents
//properties and methods.

// super(args) //calls Parents constructor

// super.parentMethod(args)

// class Person{
//     constructor(name){
//        // console.log("enter parent constuctor");

//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }

   
// }


// class Engineer extends Person{
//     constructor(name)
//     {
//        // console.log("enter child constuctor");
//         super(name);


//        // console.log("exit child constuctor");
//     }
//     work(){
//         console.log("code");
//     }
// }


// let engObj = new Engineer("Vaishnavi");



// PRACTICE Question - 

//ques 1-

// let DATA = "Secret Information"
// class user{
//  constructor(name,email){
//     this.name = name;
//     this.email = email;
//  } 

//  viewData(){
//     console.log("data = ",DATA);
//  }
// }
  
// let student1 = new user("vaishnvai","vaishnvai.com");
// let student2 = new user("vina","vina.com");

// let teacher = new user("Dean","dean.com");


// //ques 2 - 

// class Admin extends user{
//   constructor(name,email){
//     super(name,email);
// }

//     editData(){
//         DATA = "some new data";
//        }
// }

// let admin1 = new Admin("admin","admin.com")


//###################### lect 12 ###################

//CALLBACKS, PROMISES AND ASYNC AWAIT

//SYNC IN JS 

//Synchronous
//Synchronous means the code runs in a particular sequence of instructions given in the program.
//Each instruction waits for the previous instruction to complete its execution

//Asynchronous
//Due to synchronous programming,something imp instructions get blocked due to some previous instruction,
//which causes a delay in the UI. Asynchronous code execution allows to execute instructions immediately and doesn't block the flow.

// function hello(){
//     console.log("hello");
// };

// setTimeout(hello,2000)  //TIMEOUT  2s = 2000ms


// console.log("one");
// console.log("two");
// setTimeout(()=>{
    
// console.log("hello");

// },4000);

// console.log("three");
// console.log("four");

// const hello = ()=>{
//     console.log("hello");

// }

// setTimeout(hello,3000);

//Callback Hell

//Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
//(Pyramid of Doom)

//This style of programing becomes difficult to understand & manage. 

// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000);
    
// }

//if we want dealy for individual data loike if we want to print data1 first then after delay of 2s data2 then data 3 and so on

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
    
// }

// getData(1,()=>{
//     console.log("getting data2....");
//     getData(2,()=>{
//         console.log("getting data3....");
//         getData(3,()=>{
//             console.log("getting data4....");
//             getData(4);
//         });
//     });
// });


//Promises 

//Promises is for "eventual" completion of task. Is is an object in JS.
//It is a solution to callback hell.

//let promise=newPromise((resolve,reject)=>{...})   --function with 2 hnadlers

//*reolve and reject are callbacks provided by JS 

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     //resolve(123);
//     //resolve("success");

//     //reject("some error ")
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     },3000);
    
//  });
// }


//A Javascript Promise object can be:

//Pending : the result is undefined
//Resolved : the result is a value(fulfilled)
//Rejected: the result is an error object

//*Promise has a state (pending,fulfilled)&some result(result for resolve & error for reject).


//*****then()*****
//promise.then((res)=>{...})

// const getPromise = ()=>{
//     return new Promise((reolve,reject)=>{
//         console.log("I am a promise");
//          reolve("success");
         
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });

//*****catch()****** 
//promise.catch((err)=>{...})

// const getPromise = ()=>{
//     return new Promise((reolve,reject)=>{
//         console.log("I am a promise");
//          reject("error");
//     });
// };

// let promise = getPromise();
// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// function asyncFunc() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }


// console.log("fetching data1.......");
// let p1 = asyncFunc();
// p1.then((res)=>{
   
//     console.log("fetching data2.......");
// let p2 = asyncFunc2();
// p2.then((res)=>{
   
// });
// });


// console.log("fetching data1.......");
// asyncFunc().then((res)=>{
//     console.log("fetching data2.......");
//     asyncFunc2().then((res)=>{});
// });


//Promise Chain

//code 341 to 352

// let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res);
// });

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
        
//     })
// })

// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });



//Async-Await

//async function always returns a promise.

//async function myFunc(){...}

//await pauses the execution of its surrounding async function until the promise is settled.


// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log("weather data");
//         resolve(200);
//         },2000);
//     });
// }


// async function getWeatherData() {
//     await api();   //1st call
//     await api();  //2nd call
    
// }


// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         },2000);
//     });
// }

//Async-Await
// async function getAllData(){
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
// }


//***  IIFE : Immediately Invoked Function Expression

//IIFE is a function that is called immediately as soon as it is defined. 

//can be used only once

// (async function (){
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
// })();


//********** lecture 13 - LAST LECTURE **************

//fetch API

//The Fectch API provides an interface for fectching(sending/receiving) resources.
//It uses Request and Response objects.
//The fetch() method is used to fetch a resource (data).

//let promise = fetch(url,[options])

//const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);


// const getFacts = async () =>{
// console.log("getting data....");
// let response = await fetch(URL);
// console.log(response);
//  };

//Understsnding Terms

//AJAX is Asynchronous JS & XML
//JSON is JavaScript Object Notation
//json() method : returns a second promise that resolves with the result of parsing the response
//body text as JSON .(Input is JSON ,output is JS object)

// const factPara = document.querySelector("#facts");
// const btn = document.querySelector("#btn");

// const getFacts = async () =>{
//     console.log("getting data....");
//     let response = await fetch(URL);
//     console.log(response);  //Json format
//     let data = await response.json();
//     console.log(data[0].text)
//      };

// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

// btn.addEventListener("click",getFacts);     


//Requests & Response

// HTTP Verbs
// Response Status Code

//*HTTP response headers also contain deatils about the responses,such as content type,HTTP status code etc.

//homework build a sending post





