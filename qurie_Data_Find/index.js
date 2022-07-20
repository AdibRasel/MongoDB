const MongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoDB.connect(url, function(error, Data){
    if(error){
        console.log("Faild Connect MongoDB")
    }else{
        console.log("Connect MongoDB Success");
        qurieDataFind(Data)
    }
})

function qurieDataFind(Data){
    const myDataBase = Data.db("school");
    const MyCollection = myDataBase.collection("student")

    const qurie = {rool_no:"05", name:"Rasel Hossain Adib"};
    // যত খানে rool_no:"05" এবং name:"Rasel Hossain Adib"- আছে সবগুলো কে নিয়ে আসবে। 
    MyCollection.find(qurie).toArray(function(error, res){
        if(error){
            console.log("Error Data Find in Databasee")
        }else{
            console.log(res)
        }
    })
}



