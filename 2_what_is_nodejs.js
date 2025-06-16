//as
//AS 

// node js basics:
// Introduction to node js
// Installing node js and npm 
// working with modules
// file system operations
// understanding HTTP module 


// npm init -> package.json -> lekha jokha of the project 

// -----------------------------------

// > what is node js?           => v8 engine (block)+ js wrapper(block) ...(remember the diagram)..
//                                 that whole thing is called node js.

// > Its not a programming language
// > Its not a Technology
// > Its not a framework
// > Its not a library


// node js : node js is a "js runtime environment",....so jab tk node chal raha 
// hai tb tk ham js se server create kr sakte hai/backend bana sakta hai,jo ek 
// js ka code khudse nahi kr skta tha.       

// -------------------------------how node js works & history behind node js--------------------------------

// > what is server? how to make server?
// => (yaha ham directly javascript ki help se server nahi bana rahe,but likhenge ham javascript
//    ka hi code..and woh js ka code v8 engine ke saath milke server bana dega)


// > pehele js se backend nahi ban sakta tha.
// > kyuki js ke pass woh functionalities nahi hai jinse backend banta hai.
// > ryan dahl ne socha js e backend banna chahiye
// > google chrome ke v8 engine ka code open source hai and ryan dahl uss code mein
//   chhedkhaani kiya,but chrome ka v8 engine c++ mein bana hai,toh usne socha ki hamein
//   toh js mein code krna hai and usne socha ki woh js mein code krein and backend ban 
//   jaaye/server bana paaye.

// > ham js ka code likhenge jo ki wrapper layer of js receive kregi & & jo code wrapper
//   layer of js receive kregi woh aage v8 engine ko convert hoke milega & then woh js code v8
//   engine ke c++ modules ke saath ek server create krega.

// ----------------------------------------------------------------------------------------------------


const fs = require('node:fs')                     //fs means file system

// ----------------------

// fs.writeFile("hey.txt","Hello kaise ho",function(err){          // writeFile ka mtlb file ko create krna
//     if(err) console.log(err);
//     else console.log('done')
// })

// -----------------------------------------------------------------------------------
// fs.appendFile("hey.txt"," mai toh achha hoon",function(err){
//     if(err) console.log(err);
//     else console.log('done')
// })


// ---------------------------------------------------------------------------------------

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log('done') 
// })

// ----------------------------------------------------------------------------------------

fs.copyFile("hello.txt","./copy/copy.txt",function(err){
    if(err) console.log(err);
    else console.log('done');
})

// ----------------------------------------------------------------------------------------

// fs.unlink("hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log('removed');
// })
// [It removes/deletes the file ..here i.e. hello.txt]

// -------------------------------------------------------------------------------------------

// fs.rm("./copy",{recursive: true}, function(err){
//          if(err) console.log(err);
//          else console.log('removed');     
//      })                                

// -------------------------------------------------------------------------------------------

// fs.writeFile('hey.txt',"hey hello kaise ho",function(err){
//   if (err) console.error(err);
//   else console.log('done');  
// })                                    


// const fs = require('fs')

// fs.writeFile("hey.txt","Hello kaise ho",function(err){          
//     if(err) console.log(err);
//     else console.log('done')
// })

// fs.writeFile("helu.txt"," mein badhiya huu",function(err){          
//     if(err) console.error(err);
//     else console.log('done')
// })


// fs.unlink("helu.txt",function(err){       //it will remove the file i.e helu.txt
//     if(err) console.log(err);
//     else console.log('removed')
// })

// ----------------------------------------------
















