const mongoDB = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

mongoDB.connect(url, function(error, All_Data){
    if(error){
        console.log("Error MongoDB Connect")
    }else{
        console.log("Success MongDB All Data Find");
        // find_one_Data(All_Data)
        findAllDAta(All_Data)
    }
})

function find_one_Data(All_Data){
    const My_DataBase = All_Data.db("school");
    const My_Collection = My_DataBase.collection("student");

    const find_Data = {name: "Tajmun Riyad"}
    My_Collection.findOne(find_Data, function(error, result){
        if(error){
            console.log("Find Faild find method")
        }else{
            console.log(result);
            document.write(result)
        }
    })
}


function findAllDAta(All_Data){
    const myDatabase = All_Data.db("school")
    const mycollaction = myDatabase.collection("student");

    mycollaction.find().toArray(function(error, res){
        console.log(res)
    })

}

