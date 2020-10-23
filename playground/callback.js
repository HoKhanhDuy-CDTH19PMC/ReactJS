<<<<<<< HEAD

function callToSever(){
   data=[];
    return setTimeout(()=>{
        data=[1,2,3];
    },3000);
    console.log(data);
x
}
setTimeout(callToSever,1000);
=======
function callToServer(callback){//ajax
    setTimeout(()=>{
        let data = []
        data = [1,2,3]
        callback(data) 
    },3000)
}

// callToServer(function(res){
//     console.log(res)
// })

//
function callToServerPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = []
            data = [1,2,3]
            reject("SOMETHING WENT WRONG")
            resolve(data) 
        },3000)
    })
}

function callToServerPromise2(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = []
            data = [a,{
                children:"ABC"
            }]
           
            resolve(data) 
        },3000)
    })
}

// callToServerPromise().then(response=>{
//     console.log(response)
//     return callToServerPromise2(response[0])
//     //promise chaining
// }).then((data)=>{
//     console.log("RES 2",data)
// }).catch(err=>{
//     console.log(err)
// })


async function callAll(){
   try{
    const data_1  = await callToServerPromise();
    const data_2 = await callToServerPromise2(data_1[0])
    console.log(data_2)
   }catch(err){
    console.log("ERRR!",err)
   }
}
callAll()
>>>>>>> 5cabe4522f31b464d2af1d2cd767889989dde452
