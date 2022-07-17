const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://AdibRasel_Demo:KdWdv0oAYeCixIaf@cluster0.7fmcvan.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(url, function(error, result){
    if(error){
        console.log("Your Connact Faild")
    }else{
        console.log("Your Connect Success");
        datainsert(result)
        // dataDelete(result)
        // deleteAllItem(result)
    }
})


function datainsert(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");
    
    const anyDAta = {
        name:"kawsar ahammed sakin",
        rool_no: "05",
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

function dataDelete(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    var deleteItem ={father_name:"jani na"
    }

    mycollaction.deleteOne(deleteItem, function(error){
        if(error){
            console.log("data delete failde")
        }else{
            console.log("data delete success")
        }
    })


}

function deleteAllItem(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    mycollaction.deleteMany(function(error, deleteResult){
        if(error){
            console.log("Delete all data failed")
        }else{
            console.log(deleteResult)
        }
    })

}

function findOnewithoutcondition(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    mycollaction.findOne

}


