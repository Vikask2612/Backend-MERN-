// -> Form handling and working with the forms :

// To handle backend process of forms & making sure the data coming from any frontend
// library,framework,templating engines ,we still handle it at the backend.

// as
  

// const express  = require('express');         
// const app = express();

// app.use(express.json());                             

// app.use(express.urlencoded({extended : true}));

// //This is how we write Middleware:(app.use -> means we are using middleware)

// app.use(function (req, res, next){    //  jb tk next nhi likhoge tb tk request aage
//                                       //  forward nhi hogi..so "next" likhna jaruri hai.

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
//     return next(new Error('something went wrong...'))    //This will show on console(in vs code
//                                                             terminal)       
// })


// app.use((err, req, res, next) => {     //Error Handling...just write this at the end to use error handling
//     console.log(err.stack)
//     res.status(500).send('something went wrong,we dont have any idea!')    //This will show on frontend(chrome browser)
// })

// app.listen(3000);
// -------------------------------------------\\

