const mongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

mongoDB.connect(url, (error, All_Data)=>{
    if(error){
        console.log("MongoDB Connect Error")
    }else{
        console.log("Success All Data Delete")
        // any function code
        All_Data_Delete(All_Data) 
    }
})

function All_Data_Delete(All_Data){
    const MyData = All_Data.db("school");
    const MyCollection = MyData.collection("student");

    MyCollection.deleteMany(function(error, result){
        if(error){
            console.log("কালেকশানের সকল ডাটা ডিলেট হয়ে যাবে।")
        }else{
            console.log(result)
        }
    })
}


