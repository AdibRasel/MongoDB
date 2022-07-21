const http = require("http");
const port = "2022";
const fs = require("fs")

const mongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

// mongoDB.connect(url, (error, DaTa)=>{
//     if(error){
//         console.log("Connect Faield MongoDB live server")
//     }else{
//         console.log("Connect Success MongoDB Databas");
//         // code here 
//     }
// })

// live server 

http.createServer((req, res)=>{

    if(req.url=="/home"){
        fs.readFile("index.html", (error, home)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(home)
            res.end();
        })
    }


    else if(req.url=="/submit"){
        fs.readFile("index.html", (error, home)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(home)
            res.end();
        })
        mongoDB.connect(url, (error, DaTa)=>{
            if(error){
                console.log("Connect Faield MongoDB live server")
            }else{
                console.log("Connect Success MongoDB Databas");
                // code here 
                first_last_name_save(DaTa)
            }
        })

    }


    else{
        // fs.readFile("../index.html", (error, home)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write("Error Page, Please url add to /home, /about/ etc")
            res.end();
        // })
    }
}).listen(port, (error)=>{
    if(error){
        console.log("listen error")
    }else{
        console.log("Server Running Success")
    }
})





function first_last_name_save(DaTa){
    const myDataBase = DaTa.db("MongoDB_Project")
    const Mycollection = myDataBase.collection("collection");

    const first_name = document.getElementById("First_Name").value;
    const last_name = document.getElementById("Last_Name").value;

    const anyData = {
        First_Name : first_name,
        last_name : last_name
    }


    Mycollection.insertone(anyData, (error)=>{
        if(error){
            console.log("inserOne Data Faild")
        }else{
            console.log("Data inser Success")
        }
    })

}
// document.write("Hello Bangladesh")