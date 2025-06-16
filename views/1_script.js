//Fundamentals of Javascript:
//arrays and objects
//functions return
//async js coding
// as
//we should know (foreach, map, filter, find, indexOf) in array

// ------------------------------------ARRAY----------------------------------------

// ---------------------------------forEach loop------------------------------------
// var arr = [1,2,3,4];

// arr.forEach((val)=>{                       
//     console.log(val + " Hello");             
// })

// output: 1 Hello                           
//         2 Hello
//         3 Hello
//         4 Hello

// -----------------------------------Map Method------------------------------------

+6// var arr = [1,2,3,4];
// let newarr = arr.map((val)=>{
//         return val + 12
// })

// console.log(newarr);

// output: [13,14,15,16]


// --------------------------------Filter Method-------------------------------------

// var arr = [1,2,3,4];

// let newarr =  arr.filter((val)=>{
//     if(val>=2){
//         return true;
//     }
//     else
//     return false
//  })
// console.log(newarr)

// output: [2,3,4]

// ----------------------------------find method--------------------------------------

// var arr = [1,2,3,4];

// var ans = arr.find((val)=>{
//     if(val===2)
//         return val;
// })

// console.log(ans)

// output: 2

// -------------------------------------indexOf----------------------------------------

// var arr = [1,2,3,4];

//Direct write in console for output

// arr.indexOf(12)
// output: -1          .......{here -1 means index of 12 is not present...that means
//                             12 is not present in the array...& thats how we solve
//                             lots of problem in backend}

//but if we write (in console):

// arr.indexOf(2)
// output: 1               ...{bcoz 2 is present at 1st index so o/p is 2}


// ---------------------------------------Objects---------------------------------------------


// function kkk(q,w,e){
//      console.log("Hello")
// }
                                               
//by writing kkk.length ...we will get the length of the function i.e. 3 here(there are 3
                            //  parameters in the function so the length is 3)

// o/p: 3                                     

// -------------------------------------------------------------------------------------------


// forEach method:
                                             
// let arr = [11,23,43,55,21,10,20];

// arr.forEach((val)=>{
//     console.log(val + " hello");
// })

// ---------------------------------------

// as
// map method:

// let arr = [11,23,43,55,21,10,20];

// let newarr = arr.map((val)=>{
//     return val*2
// })
// console.log(newarr);  // here it will create the new array

// ---------------------------------------

// Filter method:

// let arr = [11,23,43,55,21,10,20];

//     let newarr = arr.filter((val)=>{
//         return val >= 30
//     })
//     console.log(newarr);            //It creates a new array of elements which we got as an output.

// ---------------------------------------

// Reduce method:

// let arr = [11,23,43,55,21,10,20];

// let newarr = arr.reduce((prev,curr)=>{
//         return prev + curr
// })
// console.log(newarr);

// ---------------------------------------

// async js:

// => line by line code chale isey kehte hai synchronous.

// jo bhi code async nature ka ho,usey side stack mein bhej
// do and agle code ko chalao jo bhi sync nature ka ho,jab 
// bhi saara sync code chal jaaye, tab check karo ki async code
// complete hua ya nahi and agar woh complete hua ho toh usey main
// stack mein lao & chala do.


// const URL ="https://cat-fact.herokuapp.com/facts";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");


 
// const getFacts = async()=>{
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();

//     factpara.innerText = data[2].text; 
// } 
//     btn.addEventListener("click",getFacts);

// ---------------------------------------

// async js: jo bhi code async nature ka ho,usey side stack mein bhej do and agle
//           code kok chalao jo bhi sync nature ka ho, jab bhi saara sync code chal
//           jaaye, tab check karo ki async code complete hua ya nahi and agar woh 
//           complete hua toh usey main stack mein lao aur chala do.

        // async function abcd() {
        //    console.log("getting data...");
        //    let response = await fetch(`https://catfact.ninja/fact`);
        //    let data = await response.json();
        //    console.log(data);
        // }
        // abcd();

        // to get the output: chrome browser > console > type "abcd()"

// -----------------------------------------

