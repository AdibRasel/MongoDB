const Model = require("./Model.js");



// test 
exports.test=  (Req, Res)=>{
    // let ReqBody = Req.body;


    // try{
    //     let hello = Model.find({});
    //     return {status:"success",  data:hello}
    // }catch(error){

    // }
    let hello = Model.aggregate([]);
    Res.status(200).json(hello)




}



// db.getCollection("advancedmongodb").find({})
// db.getCollection("advancedmongodb").aggregate([])


































// db.getCollection("advancedmongodb").insert(
//     {
//         name:"Kawsar Ahammed Sakin",
//         roll:"321",
//         class: 11,
//         city:"Noakhali",
//         salary:"5000"
//     },
//     {
//         name:"Abid Hossain",
//         roll:"321",
//         class: 19,
//         city:"dhaka",
//         salary:"500"
//     },
//     {
//         name:"Faruk Hossain",
//         roll:"321",
//         class: 9,
//         city:"Feni",
//         salary:"10000"
//     },
//     {
//         name:"Osman Goni",
//         roll:"391",
//         class: 8,
//         city:"feni",
//         salary:"10000"
//     },
//     {
//         name:"Jamal Hossain",
//         roll:"354",
//         class: 7,
//         city:"vola",
//         salary:"12000"
//     },
//     {
//         name:"Mohon Hossain",
//         roll:"331",
//         class: 6,
//         city:"Laxmipur",
//         salary:"20000"
//     },
//     {
//         name:"Azad Hossain",
//         roll:"381",
//         class: 10,
//         city:"Laxmipur",
//         salary:"20000"
//     },
//     {
//         name:"Awal Mirza",
//         roll:"32",
//         class: 10,
//         city:"Noakhali",
//         salary:"40000"
//     }
// )



// db.getCollection("advancedmongodb").insertMany(
//     [
//         {
//             name: "Kawsar Ahammed Sakin",
//             roll: "321",
//             class: 11,
//             city: "Noakhali",
//             salary: "5000"
//         },
//         {
//             name: "Abid Hossain",
//             roll: "321",
//             class: 19,
//             city: "dhaka",
//             salary: "500"
//         },
//         {
//             name: "Faruk Hossain",
//             roll: "321",
//             class: 9,
//             city: "Feni",
//             salary: "10000"
//         },
//     ]
// )





// db.getCollection("advancedmongodb").insert(
//     [
//         {
//             name:"Kawsar Ahammed Sakin",
//             roll:"321",
//             class: 11,
//             city:"Noakhali",
//             salary:"5000"
//         }
//     ]
// )