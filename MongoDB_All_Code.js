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
        // findOnewithoutcondition(result)
        // findAllDAta(result)
        // findAllDAtaByProjection(result)
        // findAllDAtaByqurie(result)
        // findAllDAtaBylimite(result)
        // findAllDAtaBysort(result)
        // update(result)
        // createNewcollaction(result)
    }
})


function datainsert(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");
    
    const anyDAta = {
        name:"o kuddiccs",
        rool_no: "04",
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

    var deleteItem ={rool_no:"02"}

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

    var findOvj ={rool_no:"04"};

    mycollaction.findOne(findOvj, function(error, findresult){
        // console.log(result)
    mycollaction.findOne(findOvj, function(error, resultdata){
        console.log(resultdata)
    })
    })

}

// find all data 
function findAllDAta(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    mycollaction.find().toArray(function(error, res){
        console.log(res)
    })

}


// find ispecipic collum 
function findAllDAtaByProjection(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    const item = {};
    const itemprojection = {projection:{rool_no:"", student_id:""}}


    mycollaction.find(item, itemprojection).toArray(function(error, res){
        console.log(res)
    })

}

// find ispecipic qurie 
function findAllDAtaByqurie(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    const qurie = {rool_no:"03", name:"shaminul islam sojib"};
    //jekhane jekhane rool_no: "03" thakbe segulu sob cole asbe, condition onek gulu dile sob gulu sotti hole sob gulu data cole asbe 


    mycollaction.find(qurie).toArray(function(error, res){
        console.log(res)
    })

}




// find limited data 
function findAllDAtaBylimite(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");


    mycollaction.find().limit(2).toArray(function(error, res){
        console.log(res)
    })

}


// find sort 1, -1
function findAllDAtaBysort(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    const sortpattern = {rool_no:-1}

    mycollaction.find().sort(sortpattern).toArray(function(error, res){
        console.log(res)
    })

}



// update data 
function update(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");


    const myQuery = {rool_no:"5"};
    const newValue = {$set: {name:"Romjan Hossain", mobile_no: "sonar bal"}}

    mycollaction.updateOne(myQuery, newValue, function(error, res){
        console.log(res)
    })


}


// create collection 
function createNewcollaction(result){
    const myDatabase = result.db("school")

    myDatabase.createCollection("Techer", function(error, res){

        console.log(res)
    })


}



// function deleteMycollaction(result){

//     const myDatabase = result.db("school")

//     myDatabase.dropCollection(name:"Techer", function(error, res){
//         console.log(res)
//     })

// }