const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(error, Data){
    if(error){
        console.log("Your Connact Faild")
    }else{
        console.log("Your Connect Success");
        datainsert(Data)
    }
})


function datainsert(Data){
    const myDatabase = Data.db("school")
    const mycollaction = myDatabase.collection("student");

    const anyDAta = {
        name:"Rasel Hossain",
        father_name:"Harun Or Roshid",
        rool_no: "01",
        student_id: "5588",
        mobile_no: "010000000",
        email_address:"jani na"
    }
    mycollaction.insertOne(anyDAta, function(error){
        if(error){
            console.log("Data insert failed ")
        }else{
            console.log("data insert success")
        }
    })
}