// http: yahi protocol/(rule) hai jisko follow krein bina aap internet pe naa hi kuch bhej 
//       sakte ho,naa hi kuch manga sakte ho.

// {basically,if we do not follow http protocol,then we cannot use internet(naa hi ham kuch bhej 
//  skenge,naa hi kuch manga payenge toh internet kaha se chalega)}

// ----------------------------------------


//server create krne ka code:

    const http  =  require('http');      
                                          
    const server = http.createServer(function(req, res){
                    res.end("Hello world");  
    })                                       
    server.listen(3000);                     


//  -> server kaise create krein code likhne ke baad (explaining stepwise:)
//          1) terminal mein node 2.1_http_https.js likhke enter kro. (enter krne ke baad server ban
//             jayega.. aur check krne ke liye point 2 padho)
//          2) then browser pr jaake likho localhost : 3000...toh jo bhi hamne code ke ander line likhi
//             hogi woh browser pe show hojayega (i.e hello world) 

//     (o/p): It will show "Hello world" on the browser screen (frontend)

// -----------------------------------------------------------------------------------------------

// https:

// Protocol(rules):
        // Internet pr kuch bhi krne ke liye rules banaye gye hai jinhone internet banaya hai,
        // abb unn rules ko follow krna jruri hai,abb woh rules follow ho isliye aap ke operating
        // system ke software mein pre installed aate hai.



    