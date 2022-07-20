// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017";

// MongoClient.connect(url, function(error, Data){
//     if(error){
//         console.log("Your Connact Faild")
//     }else{
//         console.log("Your Connect Success");
//         datainsert(Data)
//     }
// })


// function datainsert(Data){
//     const myDatabase = Data.db("school")
//     const mycollaction = myDatabase.collection("student");

//     const anyDAta = {name:"Rasel Hossain"}
//     mycollaction.insertOne(anyDAta, function(error){
//         if(error){
//             console.log("Data insert failed ")
//         }else{
//             console.log("data insert success")
//         }
//     })
// }

const http = require("http");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

http.createServer((request, response)=>{
    if(request.url=="/datasent"){
        response.writeHead(200,{"content-type":"text/html"});
        // MongoDB Data Pass function
        MongoClient.connect(url, (error, DataPass)=>{
            if(error){
                console.log("Error Data Pass, Datapas Faild")
            }
            else{
                console.log("<h1>Data Sent Success</h1>")
                // Data Sent function
                DataSent(DataPass)
            }
        })
        response.write("request Data Sent Success");
        response.end()
    }
    else{
        response.writeHead(200,{"content-type":"text/html"});
        response.write("404 not found<br> Please Add your url to /home, /about, /etc");
        response.end()
    }
}).listen(2020, (error)=>{
    if(error){
        console.log("Server Error")
    }else{
        console.log("Server Running Success")
    }
});

function DataSent(DataPass){
    const myDatabassAddress = DataPass.db("school");
    const DataAddressDataSent = myDatabassAddress.collection("student");
    const data ={School_name:"Shahapur M.L Highe School",School_Address:"Shahapur, Chatkhil, NoakhalI."}
    DataAddressDataSent.insertOne(data, (error)=>{
        if(error){
            console.log("My Data Sent Faile")
        }else{
            console.log("My Data Sent Success")
        }
    })
}