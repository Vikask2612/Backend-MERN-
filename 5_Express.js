// Express.js Framework : (Framework means a particular flow/ussi flow mein kaam hona chahiye)

// Express.js : suppose hamne koi utube pe kuch search kiya(eg : bb ki vines videos),to ye hamne request
//              bheji h..woh request jaha gyi/woh request jisne receive ki woh koi human nhi h..woh ek 
//              computer hai..toh jaise hi request computer pe aai..woh aate hi Express.js ka kaam shuru 
//              hojata hai,to ye express js poori request ko process krta hai..kya response bhejna hai
//              sab kaam hamare liye Express.js krega.

// Introduction to Express.js:

// -> express js ek npm package hai      
// -> Framework : (Framework means a particular flow/(ussi flow mein kaam hona chahiye))
// -> Express Manages everything from receiving the request and giving the response.

// ------------------------------------------------------------------------------------------------------
// as

// ->Setting up a basic Express application.  
// -> Routing : basic level pe routing aise create krte hai


// const express  = require('express')         
// const app = express()               

// app.use(function(req,res,next){
//     console.log("middleware chala..")
//     next();
// })
                                           
// app.get('/',function (req, res){           
//     res.send('Hello from Express server...')       // used npx nodemon 5_Express..isse yeh 
//                                                         // hoga ki server mein changes apne aap honge..
//                                                         // baar baar node Express_5 likhne ki jarurat
//                                                         // nhi pdegi..apne aap hi browser mein server
//                                                         // mein jo bhi response h woh update hojayega.
// })

// app.get('/Profile',function (req, res){                         // Here '/profile' is a route
//     res.send('this is vikas from india...') 
// })

// app.get('/Profilew',function (req, res){                         // Here '/profile' is a route
//     res.send('this is vikas from india & this is my profile...') 
// })
                       

// app.listen(3000);                        


//------------------------------------------------------------------------------------------------------
// Middleware / request & response handling / Error Handling:

// Middleware :
// -> Jab bhi server request accept karta hai waha se routes pe pohochne 
//    tak agar aap uss request ko beech mein rokte ho & kuch perform karte ho,
//    (jaise kuch prinnt krwana ho)..
//    toh ye element middleware kehlaata hai.

// In simple words : jaise jab bhi koi 'server' request accept krta hai...toh koi bhi request aaye toh
//                   pehele "hello" print ho then routes pe jaaye..to basically jo bhi kaam ham kisi
//                   bhi routes se pehele krwana chahte hai,jaise agr ham chahte hai koi bhi route chale
//                   usse pehele kuch kaam ho to wahape ham middleware use krte hai.

                                                             

// const express  = require('express');         
// const app = express();                  
                                                             
// //This is how we write Middleware:(app.use means we are using middleware)
// app.use(function (req, res, next){    //  jb tk next nhi likhoge tb tk request aage
//                                       //  forward nhi hogi..thats why, "next" likhna jaruri hai.
//     console.log('middleware chala...');   
//     next();     
// })

// app.get('/',function (req, res){          
//     res.send('this is vikas from india...')    
// })                                           
                                             
// app.get('/about',function (req, res){            
//     res.send("about page hai ye...")        
// })



// app.get('/Profile',function (req, res, next){                

//     return next(new Error('something went wrong...'))        // This will show on console(in vs code terminal)       
// })

// app.use((err, req, res, next) => {                         
//      //Error Handling                   
//     console.log(err.stack)               
//     res.status(500).send('something went wrong,we dont have any idea!')    // This will show on
//                                                                               frontend(chrome browser)
// })

// app.listen(3000);

//                      --------------------------------------------

// understanding domain & route :

// youtube.com/profile :
// -> here 'youtube.com' is a domain..& '/profile' is a route..(domain chhodke jitna
//                                                                                  bhi kuch hoga sab 
//                                                                                  route hota hai) 


// -------------------------------------------------------------------------------------------------------

//  request & response handling :

//    fbf -> frontend backend frontend :

// step1(Frontend): 1) browser pe likho koi bhi url jo abhi tk tumne server waale code mein nhi likha hai 
            
    //               e.g) localhost:3000/promfile..   (hit enter :o/p will be 'cannot GET /promfile' )

// step2(Backend):  2) uske baad backend pe jao & make a route for '/promfile'

    //         e.g) app.get("/promfile",function(req,res){
    //                 res.send("promfile page hai ye")
    //              });

// step3(frontend): 3) phir frontend pr jaake reload krenge toh promfile route display hojayega


// ----------------------------------------Error handling---------------------------------------------------

// Error handling  -> Express.js ke pass ek special route hai Error handling ke liye. 

const express  = require('express');         
const app = express();                  
                                                             
//This is how we write Middleware:(app.use means we are using middleware)

app.use(function (req, res, next){                 //  jb tk next nhi likhoge tb tk request aage
                                                   //  forward nhi hogi..thats why, "next" likhna jaruri hai.
    console.log('middleware chala...');   
    next();     
})

app.get('/',function (req, res){          
    res.send('this is vikas from india...')   
    next(); 
})                                           
                                             
app.get('/about',function (req, res){            
    res.send("about page hai ye...")        
    next();
})


app.get('/Profile',function (req, res, next){                

    return next(new Error('Not Implemented...'))        // This will show on console(in vs code terminal)  

                                                             //   (yaha hamne return isliye likha hai kyuki agr koi error
                                                             //    aajaye toh wahi pr ruk jaaye,iske aage koi code likha
                                                             //    bhi ho toh bhi woh run na ho)
})


app.use((err, req, res, next) => {                          // This is Error Handling code (ye poora code sab likhne ke 
                                                            // baad hi last mein likhna hai)                  
    console.log(err.stack)               
    res.status(500).send('something went wrong,we dont have any idea!')    // This will show on
                                                                           // frontend(chrome browser)
})

app.listen(3000);

