// Initialize a project with npm 
// express install

// as

// what to learn:
// 1> setting up parsers for form

// 2> setting up ejs for ejs pages ->  ejs mtlb jo hamara front end dikhega woh ejs hai,
//                                     it looks like HTML but we can actually perform 
//                                     calculations in it.

// 3> setting up public static files


// ------------------------------------------------------------------------------------------------------

// 1> setting up parsers for form:
    
    // const express = require('express');
    // const app = express();

    // app.use(express.json());                              //} setting up parsers for form
    // app.use(express.urlencoded({extended : true}));       //} setting up parsers for form

    // app.get("/",function(req,res){
    //     res.send("chal raha hai")
    // })

    // app.listen(3000,function(){
    //     console.log("its running");
    // })

// -------------------------------------------------------------------
// as
// 2> setting up ejs for ejs pages:   

    // ->install ejs from npm 
    // ->setup ejs as a view engine

//    [ console.log(path.join(__dirname,'public')); => current path + 'public' folder bhi add
//                                                     krne ka safe tareeka]



    // const express = require('express');
    // const app = express();
    // const path = require('path');
    
    // app.use(express.json());
    // app.use(express.urlencoded({extended : true}));
    // app.use(express.static(path.join(__dirname,'public')));  //console.log(__dirname) => means poora path mere current folder tak dikh jayega
    // app.set('view engine', 'ejs');

    // app.get("/",function(req,res){
    //     res.render("index");
    // });

    // app.listen(3000,function(){
    //     console.log("its running");
    // })

// --------------------------------------------------------------------------------------

// dynamic routing:

// ham log kayi baar kuch routes dekhte hai unmein sirf ek hi hissa change hota hai.

// for eg: /author/harsh
//         /author/harshita
//         /author/harshal                 

// steps:
// -> sabse pehle browser pr jao
// -> url likhiye apna jo aapko chahiye and enter dabaiye
// -> abb uss url route ko create kariye
// -> response/(res) bhejiye kuch bhi
// -> abb uss url ko agar dynamic banana hai toh realise kro konsa part dynamic 
// -> hai aur uss part ke aage route mein colon lagado
// -> colon ":" ka mtlb dynamic hota hai,mtlb uski jagah ham kuch bhi likh sakte hai.


    // const express = require('express'); 
    // const app = express();

//     app.use(express.json());                            

//     app.use(express.urlencoded({extended : true}));      

    // app.get("/",function(req,res){
    //     res.render("index")
    // })

//   app.get("/profile/:username",function(req,res){
//        res.send(`welcome,${req.params.username}`);  //req.params matlab aisa kuch bhi jiske aage
//                                                     //  colon hai,yaha 'req.params' username hai

//         //   res.send("Hello from my side")        
//     })

//      app.get("/author/:username/:age",function(req,res){
//         res.send(`welcome,${req.params.username} of age ${req.params.age}`);  //req.params matlab aisa
//                                                                                kuch bhi jiske aage
//                                                                                colon hai,yaha 
//                                                                               'req.params' username
//                                                                                hai
//         //    res.send("chal raha hai")          
//     })                                    
                                          
//     app.listen(3000,function(){
//         console.log("its running");     
//     })


// how to get data coming from frontend at backend route
 







const express = require ('express');
const app  =  express();

app.get('/',function(req,res){
    res.send("Heloouuuu");
})

app.get('/profile/:username',function(req,res){      // ':' ke aage waala part dynamic hai i.e. 'vikas'
    res.send(`hello,${req.params.username}`)                              // req.params =>means aisa kuch bhi jiske aage colon h(i.e username)
})


app.get('/author1/:username/:age',function(req,res){
    res.send(`author name is ${req.params.username} and his age is ${req.params.age}`)
})


app.listen(3000, function(){              
     
    console.log("chal raha hai")             
})                                         