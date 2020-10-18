
function callToSever(){
   data=[];
    return setTimeout(()=>{
        data=[1,2,3];
    },3000);
    console.log(data);
x
}
setTimeout(callToSever,1000);