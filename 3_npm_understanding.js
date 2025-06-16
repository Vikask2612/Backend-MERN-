// NPM understanding

// npm - node package manager


                        // --------------------------------

// [IMP points: 1) node js core mein jo installed aata hai woh kehlaata hai module
//              2) & npm se download krte hai woh hota hai package.

                        // --------------------------------

// installing and uninstalling anything basics & advanced.
// understanding node_modules
// dependencies
// devdependencies
// scripts - understanding default scripts PATH and custom scripts
// as
// ----------------------------------------------------------------------------------------------------------

// installing and uninstalling anything basics & advanced:

// 1) install -> npm install packageKaNaam         
//    (jab ham koi package install krte hai that becomes dependency)

// 2) uninstall -> npm uninstall packageKaNaam

// -----------------------------------------------------------------------------------------------------

//dependencies : packages & packages ki dependencies.
//devdependencies : aise packages jo sirf development mein kaam aayenge..
//                  pr jab app ban jayega aur upload/deploy ho jaayega tab
//                  ham inn packages ko use nhi kr rahe honge.

                    //->easy explaination: (aisi koi bhi cheez jo sirf development/code krte waqt tk hi
                    // useful hai..upload/deploy hone ke baad nodemon naam ke package ka koi use nhi 
                    // hoga..aur baadmein jb upload hojayega app tb hamein woh use nhi krna hai..usko
                    // ham as a dev dependencies install kr skte hai)

                    // how to do it -> npm i nodemon --save-dev   ....(Here the package name is nodemon)


                    // (IMP NOTE -> toh aap aisi koi bhi cheez ko devdependencies nhi banate jo 
                    // ham deploy krne ke baad bhi use krna hai)

// -------------------------------------------------------------------------------------------------------------------------
 
// scripts related question:

// kayi baar aap koi script chalaate ho & uss script mein aap likhte ho ye command..

// script name -> npm start
//             -> npm run dev    
//             -> npm run concurrent


// question: kbhi kbhi 'run' likhte hai script mein..kbhi kbhi nhi likhte 'run' script mein...aisa kyu?

// answer : npm ya node jb install hota hai tb uske path mein start & test ye dono word mention krdiye
//          jaate hai,toh os khudki ek table banata hai..toh jb ham koi command likhte h..eg..npm start toh 
//          os file mein check krega ki alreay h ya nhi..agr milgya toh os(windows) execute krdega command...aur
//          agr nhi mila toh os(windows) keh dega ki ye command mein jaanta nhi hu.

//          isliye npm start & npm test chal jaate h kyuki woh table mein mil jaate h..thats why they run..
//          but koi unknown means 'npm chacha' execute krne jaoge toh nhi hoga kyuki woh file mein exist hi nhi krta


// -> very important point: toh aisi koi command jo hamne khudse create kiya hai..aisi script ke commands mein
//    hamein unke aage 'run' lagana pdta hai


            // ---------------------------------------(answer)
// scripts :

//    -> nodejs & npm jb install kiya tha hamne,toh node & npm ne start and test naam
//       ke 2 commands hamare windows ya os ke table mein create krdiye the.
//    -> toh every time when we write npm start or npm test toh ye 2 commands aapke windows ya
//       os mein mil jaate hain thats why they run.

//
console.log("hello world");


