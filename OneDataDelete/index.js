const http = require("http");
const MongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
http.createServer((req, res)=>{
    if(req.url=="/dataDelete"){
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h1>Your Data <b>Delete</b> Success")

        MongoDB.connect(url, (error, Data)=>{
            if(error){
                console.log("Data Error")
            }else{
                console.log("Data Delete Success");
                // eny code 
                DataDelete(Data)
            }
        })
        res.end()
    }else{
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h1> Error Page <br> Please add url http://localhost:2000/delaDelete , /etc</h1>");
        res.end();
    }
}).listen(2000, (error)=>{
    if(error){
        console.log("Server Error")
    }else{
        console.log("Your Server is Running")
    }
});



function DataDelete(Data){
    const myDatabase = Data.db("school");
    const mycollaction = myDatabase.collection("student");

    deleteItem = {School_name:"Shahapur M.L Highe School"}

    mycollaction.deleteOne(deleteItem, function(error){
        if(error){
            console.log("Data Delete Faild")
        }else{
            console.log("Data Delete Success")
        }
    })
}


// const MongoDB = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017";

// MongoDB.connect(url, (error, All_Data)=>{
//     if(error){
//         console.log("Error Delete Data");
//     }else{
//         console.log("Success Delete Data");
//         // any code to execute
//         DeleteData(All_Data)
//     }
// })

// function DeleteData(All_Data){
// const My_DataBase_Address = All_Data.db("school");
// const My_Collection_Address = My_DataBase_Address.collection("student");

//     const deleteItem ={name:"Adib"}
//     My_Collection_Address.deleteOne(deleteItem, (error)=>{
//         if(error){
//             console.log("Data Delete Failde")
//         }else{
//             console.log("Delete Success")
//         }
//     })
// }


