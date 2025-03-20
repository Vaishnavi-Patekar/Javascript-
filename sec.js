//############# lect 6 ##################

//DOM - document object model

// console.log("hello");

// console.dir(document.body);
// console.log(document.body);

//document.body.childNodes[3].innerText="abcd";

//DOM Mnipulation - 
//selecting with id : document.getElementById("myId")
//selecting with class : document.getElementsByClassName("myClass")
//selecting with tag : document.getElementsByTagName("p")

// let heading =document.getElementById("heading");
// console.log(heading);

// let head=document.getElementsByClassName("head");
// console.log(head);

// let para=document.getElementsByTagName("p")
// console.log(para);


//QUERY SELECTOR -
//document.querySelector("myId/myClass/tag") : returns first element
//document.querySelectorAll("myId/myClass/tag") : returns a nodelist

// let firstEl = document.querySelector("p"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); // all element
// console.dir(allEl);

// let firstEl = document.querySelector(".head"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".head"); // all element
// console.dir(allEl);

// let firstEl = document.querySelector("#heading"); // 1st element
// console.dir(firstEl);

//DOM Manipulation Properties -
//tagName : returns tag for element nodes  //firstEl.tagName

//innerText : returns the text content of the element and all its children //div.innerText
//innerHTML : returns the plain text or HTML contents in the element  //div.innerHTML
//textContent : returns textual content even for hidden elements   //div.Content

//text node, comment node , element node

// new

// let div = document.querySelector("div");
// console.dir(div);

//PRACTICE QUES 
//ques 1-

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText +" from Vaishnavi";

//ques 2 -

//method 1 -

// let div = document.querySelectorAll(".box");
// console.dir(div);

// div[0].innerText="new unique value 1";
// div[1].innerText="new unique value 2";
// div[2].innerText="new unique value 3";

//method 2 -

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs ){
//     div.innerText = `new unique valur ${idx}`;
//     idx++;
// }

//################ lect 7 #######################

//DOM Part2

//DOM Manipulation

//ATTRIBUTES -
// getAttribute(attr) //to get the attribute value
// setAttribute(attr,value) //to set the attribute val th

//STYLE - 
// node.style

// let div = document.querySelector("div");
//  console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// div.style.backgroundColor = "green";
// div.style.backgroundColor= "purple";

// div.style.fontSize="26px";

// div.innerText = "Hello";

//INSERT ELEMENTS -   let el = document.createElement("div")
//node.append(el) : adds at the end of node(inside)
//node.prepend(el) : adds at the start of node(inside)
//node.before(el) : adds before the node(inside)
//node.after(el) : adds after the node(inside)

//DELETE ELEMENT -
//node.remove() : removes the node

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

//  let div = document.querySelector("div");
//  div.before(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi , i am new!<i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();

//PRACTICE QUESTION 
//ques 1 -

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let body = document.querySelector("body");
//  body.prepend(newBtn);

//  newBtn.style.backgroundColor="red";
//  newBtn.style.color="white";

// let para = document.querySelector("p");
// para.classList.add("newClass");


//###################### lect 8 ##########################

//EVENTS 

//The change in the state of an object is known as an Event
//Events are fired to notify code of "intersting chnages" that may affect code execution

//*Mouse events (click,double click etc.)
//*Keyboard events (keypress,keyup,keydown)
//*From events(submit etc.)
//*Print event & many more 

//EVENT HANDLING
//node.event=()=>{
// handle here
// }

// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a= 25
//     a++;
//     console.log(a); //26
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//   console.log("you are inside div");
// ;}

//priority is given to javascript not inline handle
//when we write the same handler again i.e overwrite the handler the last wrriten is executed

//EVENT OBJECT
//it is a special object that has details about the event.
//all event handlers have access to the event objects properties and methods.

//node.event = (e) =>{
    //handle here
// }

//e.target,e.type,e.clientX,e.clientY

// let btn1=document.querySelector("#btn1");
//  btn1.onclick=(evt)=>{
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX,evt.clientY4r);
//  };

//EVENT LISTENERS
//node.addEventListener(event,callback)
//node.removeEventListener(event,callback)
//*Note : the callback reference should be same to remove

//let btn1=document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>{
//  console.log("button1 was clicked - handler1");
//  //console.log(evt);
// });

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler2");
//    });
   
//    const handler3=()=>{
//     console.log("button1 was clicked - handler3");
//    }
//    btn1.addEventListener("click",handler3);
   
//    btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler4");
//    });
   
//    btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler5");
//    });
   
//    btn1.removeEventListener("click",handler3);

//PRACTICE QUES
//TOGGLE BUTTON

// let modeBtn=document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modeBtn.addEventListener("click",()=>{
//    // console.log("You are trying to change node")
//    if(currMode === "light"){
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//    }else{
//     currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("remove");
//    }
//    console.log(currMode)
// });