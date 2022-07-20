const MongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoDB.connect(url, function(error, Data){
    if(error){
        console.log("Error. Faild Connected MongoDB")
    }else{
        console.log("Connected Successfull")
        specificData(Data)
    }
});

function specificData(Data){
    const MyDataBase = Data.db("school");
    const MyCollecton = MyDataBase.collection("student");

    const item = {};
    const specificItem = {projection:{
        name:"Kawsar Ahammed Sakin",
        name:"Tajmun Riyad"
    }}

    MyCollecton.find(item, specificItem).toArray(function(error, res){
        if(error){
            console.log("Find Faild SpecificData")
        }else{
            console.log(res)
        }
    })
}