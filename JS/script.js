// var a = 10; //Reinitailize & Redeclare
// let b = 20; //Reinitalize
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str = "vinitha";
// var underline;
// var Null = null;
// var boolean = true:

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);


// var bigint = 123n;   
// var symbol = symbol('li');


//console.log(typeof bigint)
//console.log(typeof symbol)

//var arr = [10,20,30,40]

//Arthmetic operator (+,-,*,%,/)
// var a = 10;
// var b = "vinitha";
 
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);
 

//logical operator (&&,||,!)
 
//                  && ||
//true true         true true
//true true         true true
//false true        false true
//false false       false false  

//conditonal statements
// var a = 10;
// var b = 20;
// //if condition
// if(true){
//     //Template Literals
//     console.log("if conditonal statement")
//     //}

//     //var a; //Hoisting
//     console.log(a);
//     // var a = 10;

//     var a = 10; // Global Scope
//     let b = 20; // Global Scope
//     const c = 20; // Global Scope
//     if(true){ var a = 40; // Global Scope
//         console.log(a);
//         let b = 30; // Block Scope
//         const c = 30;
//         // Block Scope
//     }
//     console.log(a);
//     console.log(b);
// } 

//  var a = 10;
//  if(a%2==0){
//     console.log('${a} is Even');
//  } 
//  else{
//     console.log('${a} is Odd');
//  } 

//  var mark = 30;
//  if(mark>=70){
//     console.log("O Grade");
//  }
//  else if(mark >=70){
//     console.log("A Grade");
//  }
//  else if(mark >=35){
//     console.log("Pass")
//  }
//  else{
//     console.log("Fail")
//  } 

//  var a = 10; 
// // condition ? true statement: false statement
//  var result = a%2==0 ? "Even" : "Odd";
// console.log(result)

// mark = 90;
// var result = (mark>=90) ? "O Grade" :
//              (mark>=70) ? "A Grade":
//              (mark>=30) ? "Pass" :
//              "Fail";
// console.log(result);

// var day = 2;
//  switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("Tuesday");
//         break;
//     }
//     case 4:{
//         console.log("Wednesday")
//         break;
//     }
//     case 5:{
//         console.log("Thursday")
//         break;
//     }
//     case 6:{
//         console.log("Friday")
//         break;
//     }
//     case 7:{
//           console.log("Saturday")
//           break
//     }
//     default:{
//         console.log("Invalid")
//     }
//  }
//     // Loopimg Statement

//     // 1 time 11times 10 times
//     for(var i=1; i<=10; i++){
//         console.log(i);
//     }

//     var va1 = 10246;
//     var count = 0;
//     while(va1 >0){
//         count++;
//         va1 = Math.floor(va1/10);
//     }
//     console.log(count);

//     for (let i=1; i<=10; i++){
//         if(1%2===0){
//             continue;
//         }
//         console.log(i);
//     }

//     function add(a=5, b=6){
//         console.log(a+b);
//     }  

//     add(); // Hoisting

    //Arrow Function
    // var demo = (a=5, b=6) => {
    //     console.log(a + b);
    // }
    // demo(10,20);
    // demo();
    // demo(10); 

    // //Spread Operator(...)
    // var  arr = [10,20,30];
    // var arr2 = [...arr,40,50];
    // console.log(arr);
    // console.log(arr2)

    // Destructuring Operator

    // var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
    // console.log(m1,m2,m3,m4,m5 ;)

    // var {name,mobile,dept,email,isActive} = {
    //     name:"Vinitha",
    //     mobile:8825714575,
    //     dept:["CT","AI&DS"],
    //     email:"vinitha@gmail.com",
    //     isActve:true
    // }
    // console.log(name,mobile,dept,email,isActive)

    // var arr = [10,20,30,40,50];
    //for..in
    // for(let index in arr){
    //     console.log(index)
    // }
    // //for..in
    // for(let value of arr ){
    //     console.log(value)
    // } 

    // //for..of
    // for(let value of arr){
    //     console.log(value)
    // }
    // var obj = {
    //     name:"vinitha",
    //     dept:["CT","AI&DS"],
    //     mobile:8825714575
    // }
    // for(let key in obj){
    //     console.log(key,obj,[key])
    // }

//    console.log(key,obj[key])
//}

// var arr = [1,2,3,4,5];
// var result = arr.map((va1)=>(va1*2));
// console.log(result)

// var even = arr.filter((va1)=>va1%2===0);
// console.log(even)

// var sum = arr.reduce((add,va1)=>(add+va1),0);
// console.log(sum)


var userName = {
    name:"vinitha"
}
var user = {
    ...userName = {
        name:"vinitha"0
    
}
 
 
