const MongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoDB.connect(url, function(error, Data){
    if(error){
        console.log("Faild Connect MongoDB")
    }else{
        console.log("Connect MongoDB Success");
        update(Data)
    }
})
// update data 
function update(Data){
    const myDatabase = Data.db("school")
    const mycollaction = myDatabase.collection("student");


    const newValue = {$set: {name:"Hello Word", mobile_no: "+018"}}
    const myQuery = {rool_no:"05"};

    mycollaction.updateOne(myQuery, newValue, function(error, res){
        if(error){
            console.log("Update Data Faild")
        }else{
            console.log(res)
        }
    })
}





